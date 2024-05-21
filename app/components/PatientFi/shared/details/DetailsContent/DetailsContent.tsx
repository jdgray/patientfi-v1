"use client";
import React, { useRef, useState } from "react";
import styles from "./DetailsContent.module.scss";
import classNames from "classnames/bind";
import { TagButton } from "@/app/components/PatientFi/shared/buttons/TagButton";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { IResourceCardType } from "@/app/utils/interfaces";
import {
  PatientFiResourceType,
  SubsidiaryResourceType,
} from "@/app/utils/constants/enaums";
import Link from "next/link";

interface IDetailsContendtProps {
  card: IResourceCardType;
}

function DetailsContent({ card }: IDetailsContendtProps) {
  const cx = classNames.bind(styles);
  const carouselRef = useRef(null);
  const [currentItem, setCurrentItem] = useState(1);

  if (!card) return null;

  const {
    type,
    thumbnailText,
    tags,
    download,
    detailsInfo: {
      title,
      detailsDescription,
      images = [],
      imageDimensions,
      channel,
      imageSize,
      type: detailsType,
      suggestedUse,
      relatedContent,
    },
  } = card;
  const renderImageInfo = (type: string) => {
    if (
      type === PatientFiResourceType.SocialMedia ||
      type === PatientFiResourceType.WebsiteBanners
    ) {
      return (
        <div className={cx("info__image-info")}>
          <div className={cx("channel-size")}>
            <div className={cx("channel")}>
              <h5>Channel</h5>
              {channel}
            </div>
            <div className={cx("size")}>
              <h5>Image size</h5>
              {imageSize}
            </div>
          </div>
          <div className={cx("type-dimensions")}>
            <div className={cx("type")}>
              <h5>Type</h5>
              {detailsType}
            </div>
            <div className={cx("dimensions")}>
              <h5>Image dimensions</h5>
              {imageDimensions}
            </div>
          </div>
        </div>
      );
    }

    if (type === PatientFiResourceType.PatientOnePager) {
      return (
        <div className={cx("info__image-info")}>
          <div className={cx("channel-size")}>
            <div className={cx("size")}>
              <h5>Image size</h5>
              {imageSize}
            </div>
            <div className={cx("type")}>
              <h5>File Type</h5>
              {detailsType}
            </div>
          </div>
          <div className={cx("type-dimensions")}>
            <div className={cx("dimensions")}>
              <h5>Image dimensions</h5>
              {imageDimensions}
            </div>
          </div>
        </div>
      );
    }
    return;
  };

  const renderDetailsInfo = (type: string) => {
    if (
      type === PatientFiResourceType.SocialMedia ||
      type === PatientFiResourceType.WebsiteBanners
    ) {
      return (
        <>
          {renderImageInfo(type)}
          <div className={cx("info__tags-container")}>
            <h5>Tags</h5>
            <div className={cx("info__tags")}>
              {tags?.map((tag: string, index: number) => (
                <TagButton key={index} onClick={() => {}}>
                  {tag}
                </TagButton>
              ))}
            </div>
          </div>
          <div className={cx("info__suggested-use")}>
            <h5>Suggested Use</h5>
            <p>{suggestedUse}</p>
          </div>
        </>
      );
    }
    if (type === SubsidiaryResourceType.FloatingButtonInstructions) {
      return (
        <>
          <div className={cx("info__suggested-use")}>
            <p>{detailsDescription}</p>
          </div>
          <div className={cx("info__related-content")}>
            <h5>Related content</h5>
            <ul>
              {relatedContent?.map((link, index: number) => {
                return (
                  <li key={index}>
                    <Link href={link.url}>{link?.name}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </>
      );
    }

    if (type === SubsidiaryResourceType.TrainingPromo) {
      return (
        <>
          <div className={cx("info__suggested-use")}>
            <p>{detailsDescription}</p>
          </div>
        </>
      );
    }

    if (
      type === SubsidiaryResourceType.Texts ||
      type === SubsidiaryResourceType.Emails
    ) {
      return (
        <>
          <div className={cx("info__tags-container")}>
            <h5>Tags</h5>
            <div className={cx("info__tags")}>
              {tags?.map((tag: string, index: number) => (
                <TagButton key={index} onClick={() => {}}>
                  {tag}
                </TagButton>
              ))}
            </div>
          </div>
          <div className={cx("info__suggested-use")}>
            <h5>Suggested Use</h5>
            <p>{suggestedUse}</p>
          </div>
        </>
      );
    }

    return;
  };

  return (
    <section className={cx("DetailsContent__container")}>
      <div
        className={cx("DetailsContent__media-container", {
          text: card?.type === SubsidiaryResourceType.Texts,
          trainingPromo: card?.type === SubsidiaryResourceType.TrainingPromo,
        })}
      >
        {card?.type !== SubsidiaryResourceType.Texts ? (
          /* @ts-ignore*/
          images?.length > 1 ? (
            <div className={cx("DetailsContent__swiper-container")}>
              <Swiper
                ref={carouselRef}
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={(swiper) => {
                  setCurrentItem(swiper.activeIndex + 1);
                }}
                className={cx("DetailsContent__swiper")}
              >
                {images?.map((image, index: number) => {
                  return (
                    <SwiperSlide
                      key={index}
                      className={cx("DetailsContent__swiper-slide")}
                    >
                      <Image
                        src={image.url}
                        alt={image.alt}
                        width={507}
                        height={507}
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
              <div className={cx("swiper-custom-nav__container")}>
                <Image
                  src={"/assets/images/patientfi/swiper-arrow.svg"}
                  width={9}
                  height={18}
                  alt={"Slider prev button"}
                  onClick={() => {
                    if (carouselRef.current) {
                      // @ts-ignore
                      const swiper = carouselRef.current.swiper;
                      swiper.slidePrev();
                    }
                  }}
                />
                <div>
                  {currentItem}/{images?.length}
                </div>
                <Image
                  src={"/assets/images/patientfi/swiper-arrow.svg"}
                  width={9}
                  height={18}
                  alt={"Slider next button"}
                  onClick={() => {
                    if (carouselRef.current) {
                      // @ts-ignore
                      const swiper = carouselRef.current.swiper;
                      swiper.slideNext();
                    }
                  }}
                />
              </div>
            </div>
          ) : (
            <img src={images?.[0]?.url} alt={images?.[0]?.alt} />
          )
        ) : (
          <div className={cx("DetailsContent__text_container")}>
            {thumbnailText}
          </div>
        )}
      </div>
      <div className={cx("DetailsContent__resource-content-container")}>
        <div className={cx("info__title")}>{title}</div>
        <div className={cx("info__divider")} />
        {renderDetailsInfo(type)}
      </div>
    </section>
  );
}

export default DetailsContent;
