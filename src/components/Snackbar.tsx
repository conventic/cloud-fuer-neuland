import React from "react";

import { useSnackbar } from "../context/snackbar-ctx";

export const Snackbar = () => {
  const snackbarData = useSnackbar();
  return (
    <>
      {snackbarData.open ? (
        <div className={"snackbar"}>{snackbarData.message}</div>
      ) : null}
    </>
  );
};
