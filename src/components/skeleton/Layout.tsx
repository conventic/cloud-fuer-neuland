import React from "react";
import Helm from "./Helm";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "../../sass/main.scss";

const TemplateWrapper = ({ children }: any) => {
  return (
    <div>
      <Helm />
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default TemplateWrapper;
