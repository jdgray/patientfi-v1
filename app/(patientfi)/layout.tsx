"use client";
import PFHeader from "@/app/components/PatientFi/Header/PFHeader";
import PFFooter from "@/app/components/PatientFi/Footer/PFooter";
import PatientFiGlobalContext from "@/app/contexts/PatientFiGlobalContext";
import { usePathname } from "next/navigation";
import { patientfiRoutes } from "@/app/utils/constants/patientfi-routes";
import AnnouncementsBar from "../components/PatientFi/shared/announcements-bar/AnnouncementsBar";

export default function PatientFiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();

  return (
    <>
      <PatientFiGlobalContext>
        <AnnouncementsBar />
        <PFHeader showSearch={path !== patientfiRoutes.home} />
        <main>{children}</main>
        <PFFooter />
      </PatientFiGlobalContext>
    </>
  );
}
