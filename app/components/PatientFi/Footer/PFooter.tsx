import React from "react";
import styles from "./PFooter.module.scss";
import classNames from "classnames/bind";
import Image from "next/image";
import Link from "next/link";
import { patientfiRoutes } from "@/app/utils/constants/patientfi-routes";
import { PATIENT_FI_THIRD_PARTY_LINKS } from "@/app/utils/constants/patientfi-links";

function PFooter() {
  const cx = classNames.bind(styles);
  return (
    <footer className={cx("footer__container")}>
      <div className={cx("footer__wrapper")}>
        <div className={cx("logo__wrapper")}>
          <Link href={patientfiRoutes.home}>
            <Image
              src={"/assets/images/patientfi/patientfi-logo.svg"}
              width={161}
              height={37}
              alt={"PatientFi logo"}
            />
          </Link>
          <div>
            <Link
              href={PATIENT_FI_THIRD_PARTY_LINKS.accreditedBusiness}
              target="_blank"
            >
              <Image
                src={"/assets/images/patientfi/accredited-business.png"}
                width={142}
                height={27}
                alt={"Accredited business image"}
              />
            </Link>
          </div>
        </div>
        <div className={cx("navigation-social__wrapper")}>
          <nav className={cx("navigation")}>
            <ul>
              <li>
                <Link
                  href={PATIENT_FI_THIRD_PARTY_LINKS.whyPatientFi}
                  target="_blank"
                >
                  Why PatientFi?
                </Link>
              </li>
              <li>
                <Link href={PATIENT_FI_THIRD_PARTY_LINKS.about} target="_blank">
                  About PatientFi
                </Link>
              </li>
              <li>
                <Link
                  href={PATIENT_FI_THIRD_PARTY_LINKS.resources}
                  target="_blank"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href={PATIENT_FI_THIRD_PARTY_LINKS.patientInfo}
                  target="_blank"
                >
                  Patient Info
                </Link>
              </li>
              <li>
                <Link
                  href={PATIENT_FI_THIRD_PARTY_LINKS.careers}
                  target="_blank"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </nav>
          <div className={cx("social")}>
            {[
              {
                href: PATIENT_FI_THIRD_PARTY_LINKS.socialMedia.instagram,
                src: "/assets/images/patientfi/instagram-icon.svg",
                alt: "Instagram icon",
              },
              {
                href: PATIENT_FI_THIRD_PARTY_LINKS.socialMedia.facebook,
                src: "/assets/images/patientfi/facebook-icon.svg",
                alt: "Facebook icon",
              },
              {
                href: PATIENT_FI_THIRD_PARTY_LINKS.socialMedia.google,
                src: "/assets/images/patientfi/google-icon.svg",
                alt: "Google icon",
              },
              {
                href: PATIENT_FI_THIRD_PARTY_LINKS.socialMedia.linkedIn,
                src: "/assets/images/patientfi/linkedin-icon.svg",
                alt: "LinkedIn icon",
              },
            ].map(({ href, src, alt }, index) => (
              <Link key={index} href={href} target="_blank">
                <Image width={60} height={60} src={src} alt={alt} />
              </Link>
            ))}
          </div>
        </div>
        <div className={cx("policy__wrapper")}>
          <div className={cx("rights")}>
            © 2024 PatientFi, LLC. All Rights Reserved. Irvine, California
            92618. NMLS ID #1719196 Financing is offered on behalf of
            participating banks and credit unions for the purchase of goods
            and/or services from participating healthcare providers
          </div>
          <div className={cx("terms")}>
            <Link href={PATIENT_FI_THIRD_PARTY_LINKS.privacyPolicy}>
              Privacy Policy
            </Link>
            <div className={cx("vertical-divider")} />
            <Link href={PATIENT_FI_THIRD_PARTY_LINKS.termsOfUse}>
              Terms of Use
            </Link>
            <div className={cx("vertical-divider")} />
            <Link href={"#"}>Do Not Sell My Info</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default PFooter;
