import React from "react";
import Helm from "./Helm";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { QueryClientProvider, QueryClient } from "react-query";

import "../../sass/main.scss";

const TemplateWrapper = ({ children }: any) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Helm />
      <Navbar />
      <div>{children}</div>
      <Footer />
    </QueryClientProvider>
  );
};

export default TemplateWrapper;
