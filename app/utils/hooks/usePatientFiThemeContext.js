import { useContext } from "react";
import { PatientFiThemeContext } from "@/app/contexts/PatientFiThemeContext";

function usePatientFiThemeContext() {
  const theme = useContext(PatientFiThemeContext);
  console.log("Current theme: ", theme);
  if (!theme) {
    throw new Error("useAppContext must be used within a provider");
  }
  return theme;
}

export default usePatientFiThemeContext;
