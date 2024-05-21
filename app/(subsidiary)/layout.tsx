"use client";

import { SubsidiaryHeader } from "@/app/components/Subsidiary/SubsidiaryHeader";
import { useParams, usePathname } from "next/navigation";
import { SubsidiaryFooter } from "@/app/components/Subsidiary/SubsidiaryFooter";
import { AnnouncementsBar } from "@/app/components/Subsidiary/shared/announcements-bar";
import { subsidiaryRoutes } from "@/app/utils/constants/subsidiary-routes";

export default function SubsidiaryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();
  const { id } = useParams();

  return (
    <>
      <SubsidiaryHeader showSearch={path !== subsidiaryRoutes.home} />
      <AnnouncementsBar />
      <main>{children}</main>
      <SubsidiaryFooter id={id} />
    </>
  );
}
