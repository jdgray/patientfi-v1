"use client";
import React, { useState } from "react";
import { OutlinedButton } from "@/app/components/PatientFi/shared/buttons/OutlinedButton";
import { ContainedButton } from "@/app/components/PatientFi/shared/buttons/ContainedButton";
import { SearchInput } from "@/app/components/PatientFi/shared/inputs/search-input";
import { PFHomeNavigation } from "@/app/components/PatientFi/PFHomeNavigation";
import { PFHomeCardsSection } from "@/app/components/PatientFi/PFHomeCardsSection";
import Image from "next/image";
import classNames from "classnames/bind";
import styles from "./HomePage.module.scss";
import { useRouter } from "next/navigation";
import { patientfiRoutes } from "@/app/utils/constants/patientfi-routes";

function PFHome() {
  const cx = classNames.bind(styles);

  const router = useRouter();
  const [search, setSearch] = useState<string>("");

  const handleSearch = (e: React.SyntheticEvent) => {
    setSearch((e.target as HTMLInputElement).value);
  };

  const handleClick = () => {
    console.log("click");
    if (!search.trim()) return;
    router.push(
      `${patientfiRoutes.search}?value=${encodeURIComponent(search.trim())}`,
    );
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.code === "Enter") handleClick();
  };

  return (
    <section className={cx("home__container")}>
      <section className={cx("home__banner-container")}>
        <div className={cx("home__search-input-container")}>
          <h1 className={cx("title")}>Get Started!</h1>
          <div className={cx("text")}>
            PatientFi partners with healthcare practices to remove cost barriers
            by offering patients friendly monthly plans.
          </div>
          <SearchInput
            onChange={handleSearch}
            onClick={handleClick}
            onKeyPress={handleKeyPress}
            value={search}
          />
        </div>
        <div className={cx("home__banner")}>
          <img
            src="/assets/images/patientfi/home/main-banner.jpg"
            alt="Banner"
          />
        </div>
      </section>
      <PFHomeNavigation />
      <PFHomeCardsSection />
      <section className={cx("home__marketing-container")}>
        <section className={cx("home__marketing-wrapper")}>
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
            style={{ color: "#FFFFFF", backgroundColor: "#29DBC2" }}
          >
            Request Custom Marketing
          </ContainedButton>
          <div className={cx("text", "or")}>or</div>
          <div className={cx("outlined-button__wrapper")}>
            <OutlinedButton onClick={() => {}} style={{ color: "#000000" }}>
              Edit Templates
            </OutlinedButton>
          </div>
        </section>
      </section>
    </section>
  );
}

export default PFHome;
