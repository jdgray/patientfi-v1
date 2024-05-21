import React from "react";
import classNames from "classnames/bind";
import styles from "./ResourceCard.module.scss";
import Link from "next/link";
import { TagButton } from "@/app/components/PatientFi/shared/buttons/TagButton";
import { IResourceCardType } from "@/app/utils/interfaces";
import {
  PatientFiResourceType,
  SubsidiaryResourceType,
} from "@/app/utils/constants/enaums";
import { patientfiRoutes } from "@/app/utils/constants/patientfi-routes";

interface IResourceCardProps {
  card: IResourceCardType;
}

function ResourceCard({ card }: IResourceCardProps) {
  const {
    id,
    type,
    cardDescription,
    thumbnailText,
    tags,
    download,
    thumbnailImage,
    detailsInfo: { title, detailsDescription, images },
  } = card;
  const cx = classNames.bind(styles);

  const renderUrl = () => {
    switch (type) {
      case PatientFiResourceType.SocialMedia:
        return `${patientfiRoutes.socialMedia}/${id}`;
      case PatientFiResourceType.WebsiteBanners:
        return `${patientfiRoutes.websiteBanners}/${id}`;
      case SubsidiaryResourceType.Texts:
      case SubsidiaryResourceType.Emails:
        return `${patientfiRoutes.patientTextsEmails}/${id}?type=${card?.type}`;
      case PatientFiResourceType.PatientOnePager:
        return `${patientfiRoutes.patientOnePager}/${id}`;
      case PatientFiResourceType.WebBrochureGeneric:
        return `${patientfiRoutes.webBrochureGeneric}/${id}`;
      case PatientFiResourceType.WebBrochureAesthetic:
        return `${patientfiRoutes.webBrochureAesthetic}/${id}`;
      default:
        return "";
    }
  };
  return (
    <div className={cx("container")}>
      {type === SubsidiaryResourceType.Texts ? (
        <div className={cx("text__wrapper")}>
          <div>{thumbnailText}</div>
        </div>
      ) : (
        <div className={cx("image__wrapper")}>
          <img src={thumbnailImage?.url} alt={thumbnailImage?.alt} />
        </div>
      )}
      <div className={cx("info__wrapper")}>
        <div className={cx("info__text-wrapper")}>
          <div className={cx("info__title")}>{title}</div>
          <div className={cx("info__divider")} />
          <div className={cx("info__desc")}>{cardDescription}</div>
          <div className={cx("info__tags")}>
            {tags?.map((tag: string, index: number) => {
              if (index > 1) return;
              return (
                <TagButton key={index} onClick={() => {}}>
                  {tag}
                </TagButton>
              );
            })}
          </div>
        </div>
        <Link className={cx("info__link")} href={renderUrl()}>
          {"View details >>"}
        </Link>
      </div>
    </div>
  );
}

export default ResourceCard;
