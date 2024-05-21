"use client";
import React, { useState } from "react";
import Image from "next/image";
import { OutlinedButton } from "@/app/components/Subsidiary/shared/buttons/OutlinedButton";
import { ContainedButton } from "@/app/components/Subsidiary/shared/buttons/ContainedButton";
import { SearchInput } from "@/app/components/Subsidiary/shared/inputs/search-input";
import classNames from "classnames/bind";
import styles from "@/app/components/Subsidiary/HomePage.module.scss";
import { SubsidiaryHomeCardsSection } from "@/app/components/Subsidiary/SubsidiaryHomeCardsSection/";
import { SubsidiaryHomeNavigation } from "@/app/components/Subsidiary/SubsidiaryHomeNavigation";
import { useRouter } from "next/navigation";
import { subsidiaryRoutes } from "@/app/utils/constants/subsidiary-routes";

function SubsidiaryHome() {
  const cx = classNames.bind(styles);
  const router = useRouter();
  const [search, setSearch] = useState<string>("");

  const handleSearch = (e: React.SyntheticEvent) => {
    setSearch((e.target as HTMLInputElement).value);
  };

  const handleClick = () => {
    if (!search.trim()) return;
    router.push(
      `${subsidiaryRoutes.search}?value=${encodeURIComponent(search.trim())}`,
    );
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.code === "Enter") handleClick();
  };

  return (
    <section className={cx("home__container")}>
      <section className={cx("home__banner-container")}>
        <div className={cx("home__banner")}>
          <img
            src="/assets/images/subsidiary/home/main-banner.jpg"
            alt="Banner"
          />
        </div>
        <div className={cx("home__search-input-container")}>
          <h1 className={cx("subsidiary-name")}>PRIVI</h1>
          <div className={cx("text")}>Get started</div>
          <SearchInput
            onChange={handleSearch}
            onClick={handleClick}
            onKeyPress={handleKeyPress}
            value={search}
            placeholder={"Search by category, subject, platform, etc...."}
          />
        </div>
      </section>
      <SubsidiaryHomeNavigation />
      <SubsidiaryHomeCardsSection />
      <section className={cx("home__marketing-container")}>
        <section className={cx("home__marketing-wrapper")}>
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
          <div className={cx("title")}>LOOKING FOR CUSTOM MARKETING?</div>
          <div className={cx("text")}>
            Request custom pre-built marketing or take our templates to make
            them your own with
            <Image
              src={"/assets/images/canva-icon.svg"}
              alt={"Canva icon"}
              width={55}
              height={20}
            />
            .
          </div>
          <ContainedButton
            onClick={() => {}}
            style={{ color: "#FFFFFF", backgroundColor: "#F27D62" }}
          >
            Request Custom Marketing
          </ContainedButton>
          <div className={cx("text", "or")}>or</div>
          <div className={cx("outlined-button__wrapper")}>
            <Image
              src={"/assets/images/edit-on-canva.svg"}
              alt={"Edit on canva"}
              width={88}
              height={79}
            />
            <OutlinedButton onClick={() => {}} style={{ color: "#000000" }}>
              Edit Templates
            </OutlinedButton>
          </div>
        </section>
      </section>
    </section>
  );
}

export default SubsidiaryHome;
