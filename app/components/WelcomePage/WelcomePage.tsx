"use client";
import React from "react";
import { SubsidiaryFooter } from "@/app/components/Subsidiary/SubsidiaryFooter";
import Image from "next/image";
import classNames from "classnames/bind";
import styles from "./WelcomePage.module.scss";
import { Card } from "@/app/components/WelcomePage/components/Card";
import { subsidiaryRoutes } from "@/app/utils/constants/subsidiary-routes";
import { patientfiRoutes } from "@/app/utils/constants/patientfi-routes";
import { SUBSIDIARY_THIRD_PARTY_LINKS } from "@/app/utils/constants/subsidiary-links";
import Link from "next/link";

const welcomeLinks = [
  {
    logo: "patientfi",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    btnText: "View Patientfi Resources",
    href: patientfiRoutes.home,
  },
  {
    logo: "privi",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    btnText: "View PRIVI Resources",
    href: subsidiaryRoutes.home,
  },
];

function WelcomePage() {
  const cx = classNames.bind(styles);
  return (
    <>
      <header className={cx("WelcomePage__header-container")}>
        <div className={cx("WelcomePage__header-wrapper")}>
          <Link
            href={SUBSIDIARY_THIRD_PARTY_LINKS.patientFiSite}
            target="_blank"
          >
            <Image
              width={123}
              height={28}
              alt={"PatientFi logo"}
              src={"/assets/images/welcome/patientfi-logo.svg"}
            />
          </Link>
          <Link
            href={SUBSIDIARY_THIRD_PARTY_LINKS.providerLogin}
            target="_blank"
          >
            PROVIDER LOGIN
          </Link>
        </div>
      </header>
      <main className={cx("WelcomePage__container")}>
        <section className={cx("WelcomePage__content-container")}>
          <h3>Welcome</h3>
          <h1>THE FRIENDLY WAY TO PAY</h1>
          <section className={cx("WelcomePage__cards-container")}>
            {welcomeLinks?.map((link, i) => <Card key={i} {...link} />)}
          </section>
        </section>
      </main>
      <SubsidiaryFooter />
    </>
  );
}

export default WelcomePage;
