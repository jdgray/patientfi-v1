"use client";
import React, { ReactNode, useState, createContext } from "react";

export const PatientFiThemeContext = createContext(null as any);

function PatientFiThemeProvider({ children }: { children: ReactNode }) {
  const [patientFiTheme, setPatientFiTheme] = useState({});

  // useEffect(() => {
  //   makeAuthRequestToCMS("/patient-fi-theme")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const themeData = {
  //         primaryColor: data?.data?.attributes?.primaryColor,
  //         secondaryColor: data?.data?.attributes?.secondaryColor,
  //       };
  //       setPatientFiTheme(themeData);
  //     })
  //     .catch((err) => console.error("Failed to fetch patientFi theme"));
  // }, []);
  return (
    <PatientFiThemeContext.Provider value={patientFiTheme}>
      {children}
    </PatientFiThemeContext.Provider>
  );
}

export default PatientFiThemeProvider;
