import React from "react";
import { ContainedButtonLink } from "@/app/components/Subsidiary/shared/buttons/ContainedButtonLink";
import classNames from "classnames/bind";
import styles from "./SubsidiaryHomeNavigation.module.scss";
import { subsidiaryRoutes } from "@/app/utils/constants/subsidiary-routes";

function SubsidiaryHomeNavigation() {
  const cx = classNames.bind(styles);

  return (
    <section className={cx("home__navigation-container")}>
      <nav className={cx("home__navigation-buttons-container")}>
        <ContainedButtonLink
          href={subsidiaryRoutes.socialMedia}
          icon={{
            url: "/assets/images/subsidiary/button_icons/social-media-icon.svg",
            alt: "Social media icon",
            width: 31,
            height: 24,
          }}
          style={{ color: "#FFFFFF", backgroundColor: "#A5CAC5" }}
        >
          Social media
        </ContainedButtonLink>
        <ContainedButtonLink
          href={subsidiaryRoutes.patientTextsEmails}
          icon={{
            url: "/assets/images/subsidiary/button_icons/patient-emails-texts-icon.svg",
            alt: "Social media icon",
            width: 31,
            height: 24,
          }}
          style={{ color: "#FFFFFF", backgroundColor: "#5D9A8A" }}
        >
          Patient emails & texts
        </ContainedButtonLink>
        <ContainedButtonLink
          href={subsidiaryRoutes.websiteBanners}
          icon={{
            url: "/assets/images/subsidiary/button_icons/web-banners-icon.svg",
            alt: "Social media icon",
            width: 31,
            height: 24,
          }}
          style={{ color: "#FFFFFF", backgroundColor: "#F27D62" }}
        >
          Web banners
        </ContainedButtonLink>
        <ContainedButtonLink
          href={subsidiaryRoutes.trainingPromo}
          icon={{
            url: "/assets/images/subsidiary/button_icons/training-resources-icon.svg",
            alt: "Social media icon",
            width: 31,
            height: 24,
          }}
          style={{ color: "#FFFFFF", backgroundColor: "#11181F" }}
        >
          Training & Resources
        </ContainedButtonLink>
      </nav>
    </section>
  );
}

export default SubsidiaryHomeNavigation;
