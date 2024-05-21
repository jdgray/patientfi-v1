"use client";
import React from "react";
import styles from "./SubsidiaryDetails.module.scss";
import classNames from "classnames/bind";
import { DetailsHeader } from "@/app/components/Subsidiary/shared/details/DetailsHeader";
import { DetailsContent } from "@/app/components/Subsidiary/shared/details/DetailsContent";
import { DownloadButton } from "@/app/components/Subsidiary/shared/buttons/DownloadButton";
import { useParams } from "next/navigation";
import { priviPosts } from "@/app/utils/constants/resources_mocks";
import { SubsidiaryResourceType } from "@/app/utils/constants/enaums";

function SubsidiaryDetails() {
  const cx = classNames.bind(styles);
  const { id } = useParams();
  const currentCard = priviPosts.find((card) => card.id === id);

  const renderTitle = () => {
    switch (currentCard?.type) {
      case SubsidiaryResourceType.Texts:
        return "Back to all texts";
      case SubsidiaryResourceType.Emails:
        return "Back to all emails";
      case SubsidiaryResourceType.WebsiteBanners:
        return "Back to all website banners";
      case SubsidiaryResourceType.SocialMedia:
        return "Back to all social media";
      default:
        return "Back";
    }
  };

  if (!currentCard) return null;

  return (
    <section className={cx("SubsidiaryDetails__container")}>
      <DetailsHeader title={renderTitle()} download={currentCard?.download} />
      <DetailsContent card={currentCard} />
      <div className={cx("mobile-download-container")}>
        <DownloadButton />
      </div>
    </section>
  );
}

export default SubsidiaryDetails;
