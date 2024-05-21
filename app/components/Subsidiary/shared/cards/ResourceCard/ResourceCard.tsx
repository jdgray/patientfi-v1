import React from "react";
import classNames from "classnames/bind";
import styles from "./ResourceCard.module.scss";
import Link from "next/link";
import { TagButton } from "@/app/components/Subsidiary/shared/buttons/TagButton";
import { subsidiaryRoutes } from "@/app/utils/constants/subsidiary-routes";
import { IResourceCardType } from "@/app/utils/interfaces";
import { SubsidiaryResourceType } from "@/app/utils/constants/enaums";

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
      case SubsidiaryResourceType.SocialMedia:
        return `${subsidiaryRoutes.socialMedia}/${id}`;
      case SubsidiaryResourceType.TrainingPromo:
        return `${subsidiaryRoutes.trainingPromo}/${id}`;
      case SubsidiaryResourceType.FloatingButtonInstructions:
        return `${subsidiaryRoutes.floatingButtonInstructions}/${id}`;
      case SubsidiaryResourceType.Texts:
      case SubsidiaryResourceType.Emails:
        return `${subsidiaryRoutes.patientTextsEmails}/${id}?type=${card?.type}`;
      case SubsidiaryResourceType.WebsiteBanners:
        return `${subsidiaryRoutes.websiteBanners}/${id}`;
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
          {tags?.length ? "View details >>" : "View all >>"}
        </Link>
      </div>
    </div>
  );
}

export default ResourceCard;
