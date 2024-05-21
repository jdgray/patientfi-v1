"use client";
import React from "react";
import styles from "./PatientFiDetails.module.scss";
import classNames from "classnames/bind";
import { DetailsHeader } from "@/app/components/PatientFi/shared/details/DetailsHeader";
import { DetailsContent } from "@/app/components/PatientFi/shared/details/DetailsContent";
import { DownloadButton } from "@/app/components/PatientFi/shared/buttons/DownloadButton";
import { useParams } from "next/navigation";
import { patientfiPosts } from "@/app/utils/constants/resources_mocks";
import { PatientFiResourceType } from "@/app/utils/constants/enaums";

function PatientFiDetails() {
  const cx = classNames.bind(styles);
  const { id } = useParams();
  const currentCard = patientfiPosts.find((card) => card.id === id);

  const renderTitle = () => {
    switch (currentCard?.type) {
      case PatientFiResourceType.WebsiteBanners:
        return "Back to all Logos, Banners & Buttons";
      case PatientFiResourceType.SocialMedia:
        return "Back to all social media posts";
      default:
        return "Back";
    }
  };

  if (!currentCard) return null;

  return (
    <section className={cx("details__container")}>
      <DetailsHeader
        title={renderTitle()}
        download={currentCard?.download}
        showCanva
      />
      <DetailsContent card={currentCard} />
      <div className={cx("mobile-download-container")}>
        <DownloadButton>Download</DownloadButton>
      </div>
    </section>
  );
}

export default PatientFiDetails;
