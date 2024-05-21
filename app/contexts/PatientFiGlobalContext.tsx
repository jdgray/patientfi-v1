import React, { ReactNode } from "react";
import PatientFiThemeProvider from "./PatientFiThemeContext";

function PatientFiGlobalContext({ children }: { children: ReactNode }) {
  return <PatientFiThemeProvider>{children}</PatientFiThemeProvider>;
}

export default PatientFiGlobalContext;
