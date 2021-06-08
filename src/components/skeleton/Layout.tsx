import React from "react";
import Helm from "./Helm";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Snackbar } from "../Snackbar";
import { QueryClientProvider, QueryClient } from "react-query";

import "../../sass/main.scss";
import { SnackbarProvider } from "../../context/snackbar-ctx";

const TemplateWrapper = ({ children }: any) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <SnackbarProvider>
        <Helm />
        <div className="site">
          <Navbar />
          <main className="site__content">{children}</main>
          <Snackbar />
          <Footer />
        </div>
      </SnackbarProvider>
    </QueryClientProvider>
  );
};

export default TemplateWrapper;
