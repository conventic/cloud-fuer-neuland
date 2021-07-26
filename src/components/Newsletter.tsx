import React, { useReducer, useState, useEffect } from "react";
import { useQuery, useMutation } from "react-query";
import SYSTEM_DATA from "../data/system.yaml";
import { SYSTEM_OBJ } from "./SharedObjects";
import { HTMLContent } from "./Content";
import { Notification } from "./Notification";
const _ = require("lodash");

const formReducer = (state: any, event: any) => {
  if (event.reset) {
    return {
      first_name: "",
      last_name: "",
      email: "",
      checkbox: false,
    };
  }

  return {
    ...state,
    [event.name]: event.value,
  };
};

export const NewsletterFooter = () => {
  const [responseData, setResponseData] = useState({
    severity: "",
    message: "",
  });
  const [showAlert, setShowAlert] = useState(false);
  const [formData, setFormData] = useReducer(formReducer, {
    first_name: "",
    last_name: "",
    email: "",
    checkbox: false,
  });

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (showAlert) {
      timer = setTimeout(() => {
        setShowAlert(false);
      }, 4000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [showAlert]);

  const { isLoading, error, data } = useQuery("newsletter", () =>
    fetch(
      "https://api.newsletter2go.com/forms/generate/f8ox6rqf-nojoecjb-bll"
    ).then((res) => res.json())
  );

  const mutationForm = useMutation(() => {
    return fetch(
      "https://api.newsletter2go.com/forms/submit/f8ox6rqf-nojoecjb-bll",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          recipient: {
            first_name: formData.first_name,
            last_name: formData.last_name,
            email: formData.email,
            gdpr_customer: formData.checkbox,
          },
        }),
      }
    );
  });

  const handleChange = (event: any) => {
    const isCheckbox = event.target.type === "checkbox";
    setFormData({
      name: event.target.name,
      value: isCheckbox ? event.target.checked : event.target.value,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    mutationForm
      .mutateAsync()
      .then((response: any) => response.json())
      .then((response: any) => {
        if (!_.isEmpty(response)) {
          if (response.value[0].result.success.inserted === 1) {
            setResponseData({
              severity: SYSTEM_OBJ.SEVERITY.SUCCESS,
              message: data.value[0].messages.message_subscribe_doi,
            });
            setFormData({
              reset: true,
            });
          } else if (response.value[0].result.error.failed === 1) {
            if (
              response.value[0].result.error.recipients.duplicate.length !== 0
            ) {
              setResponseData({
                severity: SYSTEM_OBJ.SEVERITY.INFO,
                message: data.value[0].messages.message_subscribe_duplicate,
              });
            } else if (
              response.value[0].result.error.recipients.invalid.length !== 0
            ) {
              setResponseData({
                severity: SYSTEM_OBJ.SEVERITY.ERROR,
                message: data.value[0].messages.message_subscribe_error,
              });
            } else {
              setResponseData({
                severity: SYSTEM_OBJ.SEVERITY.ERROR,
                message: SYSTEM_DATA.ERROR_MESSAGES.RELOAD_PAGE,
              });
            }
          }
        } else {
          setResponseData({
            severity: SYSTEM_OBJ.SEVERITY.ERROR,
            message: SYSTEM_DATA.ERROR_MESSAGES.RELOAD_PAGE,
          });
        }
        setShowAlert(true);
      })
      .catch((e) => {
        setResponseData({
          severity: SYSTEM_OBJ.SEVERITY.ERROR,
          message: SYSTEM_DATA.ERROR_MESSAGES.RELOAD_PAGE,
        });
        console.error("Error:", e);
      });
  };

  if (isLoading) {
    return (
      <progress className="progress is-small is-primary" max="100">
        15%
      </progress>
    );
  }

  if (error) {
    return (
      <div>
        <Notification
          severity={SYSTEM_OBJ.SEVERITY.ERROR}
          message={SYSTEM_DATA.ERROR_MESSAGES.NEWSLETTER_LOADING}
        />
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <div className="field">
          <label className="label" htmlFor={data.value[0].items[0].id}>
            {data.value[0].items[0].label}
          </label>
          <div className="control">
            <input
              className="input radius__none"
              type={"text"}
              required={true}
              id={data.value[0].items[0].id}
              name={data.value[0].items[0].name}
              value={formData.first_name}
              onChange={handleChange}
            />
          </div>
        </div>

        <label className="label" htmlFor={data.value[0].items[1].id}>
          {data.value[0].items[1].label}
        </label>
        <div className="control">
          <input
            className="input radius__none"
            type={"text"}
            required={true}
            id={data.value[0].items[1].id}
            name={data.value[0].items[1].name}
            value={formData.last_name}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="field">
        <label className="label" htmlFor={data.value[0].items[2].id}>
          {data.value[0].items[2].label}
        </label>
        <div className="control">
          <input
            className="input radius__none"
            type={"text"}
            required={true}
            id={data.value[0].items[2].id}
            name={data.value[0].items[2].name}
            value={formData.email}
            onChange={handleChange}
          />
        </div>
      </div>

      {showAlert ? (
        <>
          <Notification
            severity={responseData.severity}
            message={responseData.message}
          />
        </>
      ) : (
        <>
          <div className="container__checkbox">
            <label className="checkbox">
              <input
                required={true}
                type="checkbox"
                name="checkbox"
                onChange={handleChange}
              />
              <HTMLContent
                content={data.value[0].items[3].content}
                className={"content_spacing"}
              />
            </label>
          </div>
          <HTMLContent content={data.value[0].items[4].content} />
        </>
      )}
      <br />

      <div className="field">
        <button
          style={{ backgroundColor: "#EA6509" }}
          className="button is-link radius__none"
          type={data.value[0].items[5].type}
        >
          {data.value[0].items[5].label}
        </button>
      </div>
    </form>
  );
};

const popUpReduceer = (state: any, event: any) => {
  if (event.reset) {
    return {
      first_name: "",
      last_name: "",
      email: "",
      checkbox: false,
    };
  }

  return {
    ...state,
    [event.name]: event.value,
  };
};

export const NewsletterPopUp = () => {
  const [open, setOpen] = useState(false);
  const [responseData, setResponseData] = useState({
    severity: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [formData, setFormData] = useReducer(popUpReduceer, {
    first_name: "",
    last_name: "",
    email: "",
    checkbox: false,
  });

  const { isLoading, error, data } = useQuery("newsletter", () =>
    fetch(
      "https://api.newsletter2go.com/forms/generate/f8ox6rqf-nojoecjb-bll"
    ).then((res) => res.json())
  );

  const mutationForm = useMutation(() => {
    return fetch(
      "https://api.newsletter2go.com/forms/submit/f8ox6rqf-nojoecjb-bll",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          recipient: {
            first_name: formData.first_name,
            last_name: formData.last_name,
            email: formData.email,
            gdpr_customer: formData.checkbox,
          },
        }),
      }
    );
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", checkScroll);
    }

    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  const checkScroll = () => {
    if (
      !localStorage.getItem("cvt_newsletter_popup") &&
      !open &&
      window.pageYOffset > 250
    ) {
      setOpen(true);
    }
  };

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (showAlert) {
      timer = setTimeout(() => {
        setShowAlert(false);
        if (success) {
          setOpen(false);
        }
      }, 4000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [showAlert]);

  const handleClose = () => {
    setOpen(false);
    localStorage.setItem("cvt_newsletter_popup", "1");
  };

  const handleChange = (event: any) => {
    const isCheckbox = event.target.type === "checkbox";
    setFormData({
      name: event.target.name,
      value: isCheckbox ? event.target.checked : event.target.value,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    mutationForm
      .mutateAsync()
      .then((response) => response.json())
      .then((response) => {
        if (!_.isEmpty(response)) {
          if (response.value[0].result.success.inserted === 1) {
            setResponseData({
              severity: SYSTEM_OBJ.SEVERITY.SUCCESS,
              message: data.value[0].messages.message_subscribe_doi,
            });
            setFormData({
              reset: true,
            });
            localStorage.setItem("cvt_newsletter_popup", "1");
            setSuccess(true);
          } else if (response.value[0].result.error.failed === 1) {
            if (
              response.value[0].result.error.recipients.duplicate.length !== 0
            ) {
              setResponseData({
                severity: SYSTEM_OBJ.SEVERITY.INFO,
                message: data.value[0].messages.message_subscribe_duplicate,
              });
            } else if (
              response.value[0].result.error.recipients.invalid.length !== 0
            ) {
              setResponseData({
                severity: SYSTEM_OBJ.SEVERITY.ERROR,
                message: data.value[0].messages.message_subscribe_error,
              });
            } else {
              setResponseData({
                severity: SYSTEM_OBJ.SEVERITY.ERROR,
                message: SYSTEM_DATA.ERROR_MESSAGES.RELOAD_PAGE,
              });
            }
          }
        } else {
          setResponseData({
            severity: SYSTEM_OBJ.SEVERITY.ERROR,
            message: SYSTEM_DATA.ERROR_MESSAGES.RELOAD_PAGE,
          });
        }

        setShowAlert(true);
      })
      .catch((e) => {
        setResponseData({
          severity: SYSTEM_OBJ.SEVERITY.ERROR,
          message: SYSTEM_DATA.ERROR_MESSAGES.RELOAD_PAGE,
        });
        console.error("Error:", e);
      });
  };

  if (isLoading) {
    return (
      <progress className="progress is-small is-primary" max="100">
        15%
      </progress>
    );
  }

  if (error) {
    return (
      <div>
        <Notification
          severity={SYSTEM_OBJ.SEVERITY.ERROR}
          message={SYSTEM_DATA.ERROR_MESSAGES.NEWSLETTER_LOADING}
        />
      </div>
    );
  }

  return (
    <div className={open ? "modal is-active" : "modal"}>
      <div className="modal-background" onClick={handleClose}></div>
      <div className="modal-card">
        <header className="modal-card-head radius__none">
          <p className="modal-card-title">
            {SYSTEM_DATA.COMPONENTS.NEWSLETTER.HEADER}
          </p>
          <button
            className="delete"
            aria-label="close"
            onClick={handleClose}
          ></button>
        </header>
        <section className="modal-card-body">
          <form onSubmit={handleSubmit}>
            <div className="field">
              <div className="field">
                <label className="label" htmlFor={data.value[0].items[0].id}>
                  {data.value[0].items[0].label}
                </label>
                <div className="control">
                  <input
                    className="input radius__none"
                    type={"text"}
                    required={true}
                    id={data.value[0].items[0].id}
                    name={data.value[0].items[0].name}
                    value={formData.first_name}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <label className="label" htmlFor={data.value[0].items[1].id}>
                {data.value[0].items[1].label}
              </label>
              <div className="control">
                <input
                  className="input radius__none"
                  type={"text"}
                  required={true}
                  id={data.value[0].items[1].id}
                  name={data.value[0].items[1].name}
                  value={formData.last_name}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="field">
              <label className="label" htmlFor={data.value[0].items[2].id}>
                {data.value[0].items[2].label}
              </label>
              <div className="control">
                <input
                  className="input radius__none"
                  type={"text"}
                  required={true}
                  id={data.value[0].items[2].id}
                  name={data.value[0].items[2].name}
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            {showAlert ? (
              <>
                <Notification
                  severity={responseData.severity}
                  message={responseData.message}
                />
              </>
            ) : (
              <>
                <div className="container__checkbox">
                  <label className="checkbox">
                    <input
                      required={true}
                      type="checkbox"
                      name="checkbox"
                      onChange={handleChange}
                    />
                    <HTMLContent
                      content={data.value[0].items[3].content}
                      className={"content_spacing"}
                    />
                  </label>
                </div>
                <HTMLContent content={data.value[0].items[4].content} />
              </>
            )}
          </form>
        </section>
        <footer className="modal-card-foot radius__none">
          <div className="field">
            <button
              style={{ backgroundColor: "#EA6509" }}
              className="button is-link radius__none"
              type={data.value[0].items[5].type}
              onClick={handleSubmit}
            >
              {data.value[0].items[5].label}
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};
