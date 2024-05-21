import "@/app/shared/styles/index.scss";
import React from "react";
import { montserrat } from "@/app/shared/styles/font";

export const metadata = {
  title: "PatientFi",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log(montserrat);
  return (
    <html lang="en" className={montserrat.className}>
      <body>{children}</body>
    </html>
  );
}
