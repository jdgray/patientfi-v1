import React from "react";
import Image from "next/image";
import { ResourceCard } from "@/app/components/Subsidiary/shared/cards/ResourceCard";
import classNames from "classnames/bind";
import styles from "./SubsidiaryHomeCardsSection.module.scss";
import { priviPosts } from "@/app/utils/constants/resources_mocks";
import { SubsidiaryResourceType } from "@/app/utils/constants/enaums";

function SubsidiaryHomeCardsSection() {
  const cx = classNames.bind(styles);
  const pageCards = priviPosts.filter(
    (post) =>
      post.type === SubsidiaryResourceType.TrainingPromo ||
      post.type === SubsidiaryResourceType.FloatingButtonInstructions,
  );

  return (
    <section className={cx("home__cards-container")}>
      <section className={cx("home__cards-wrapper")}>
        <div className={cx("decoration")}>
          <div className={cx("divider")} />
          <Image
            src={"/assets/images/subsidiary/home/decoration-flower.svg"}
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

export default SubsidiaryHomeCardsSection;
