import React from "react";
import Image from "next/image";
import { ResourceCard } from "@/app/components/PatientFi/shared/cards/ResourceCard";
import classNames from "classnames/bind";
import styles from "./PFHomeCardsSection.module.scss";
import { patientfiPosts } from "@/app/utils/constants/resources_mocks";
import { PatientFiResourceType } from "@/app/utils/constants/enaums";

function PFHomeCardsSection() {
  const cx = classNames.bind(styles);
  const pageCards = patientfiPosts.filter(
    (post) =>
      post.type === PatientFiResourceType.PatientOnePager ||
      post.type === PatientFiResourceType.WebBrochureAesthetic ||
      post.type === PatientFiResourceType.WebBrochureGeneric,
  );

  return (
    <section className={cx("home__cards-container")}>
      <section className={cx("home__cards-wrapper")}>
        <div className={cx("decoration")}>
          <div className={cx("divider")} />
          <Image
            src={"/assets/images/patientfi/home/decoration-flower.svg"}
            width={52}
            height={52}
            alt={""}
          />
          <div className={cx("divider")} />
        </div>
        <div className={cx("cards")}>
          {pageCards.map((card, i) => (
            // @ts-ignore
            <ResourceCard key={i} card={card} />
          ))}
        </div>
      </section>
    </section>
  );
}

export default PFHomeCardsSection;
