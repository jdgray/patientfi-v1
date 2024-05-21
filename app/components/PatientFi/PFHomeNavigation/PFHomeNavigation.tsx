import React from "react";
import { ContainedButtonLink } from "@/app/components/PatientFi/shared/buttons/ContainedButtonLink";
import classNames from "classnames/bind";
import styles from "./PFHomeNavigation.module.scss";
import { patientfiRoutes } from "@/app/utils/constants/patientfi-routes";

function PFHomeNavigation() {
  const cx = classNames.bind(styles);

  return (
    <section className={cx("home__navigation-container")}>
      <nav className={cx("home__navigation-buttons-container")}>
        <ContainedButtonLink
          href={patientfiRoutes.socialMedia}
          icon={{
            url: "/assets/images/patientfi/button_icons/social-media-icon.svg",
            alt: "Social media icon",
          }}
          style={{ color: "#11181F", backgroundColor: "#FFFFFF" }}
        >
          Social media posts
        </ContainedButtonLink>
        <ContainedButtonLink
          href={patientfiRoutes.patientTextsEmails}
          icon={{
            url: "/assets/images/patientfi/button_icons/patient-emails-texts-icon.svg",
            alt: "Social media icon",
          }}
          style={{ color: "#11181F", backgroundColor: "#FFFFFF" }}
        >
          Patient emails & texts
        </ContainedButtonLink>
        <ContainedButtonLink
          href={patientfiRoutes.websiteBanners}
          icon={{
            url: "/assets/images/patientfi/button_icons/web-banners-icon.svg",
            alt: "Social media icon",
          }}
          style={{ color: "#11181F", backgroundColor: "#FFFFFF" }}
        >
          Web banners
        </ContainedButtonLink>
        <ContainedButtonLink
          href={patientfiRoutes.socialMedia}
          icon={{
            url: "/assets/images/patientfi/button_icons/training-resources-icon.svg",
            alt: "Social media icon",
          }}
          style={{ color: "#11181F", backgroundColor: "#FFFFFF" }}
        >
          Training & Resources
        </ContainedButtonLink>
      </nav>
    </section>
  );
}

export default PFHomeNavigation;
