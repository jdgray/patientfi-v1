"use client";
import React, { useState } from "react";
import styles from "./PFHeader.module.scss";
import classNames from "classnames/bind";
import Image from "next/image";
import Link from "next/link";
import { SearchInput } from "../shared/inputs/search-input";
import { subsidiaryRoutes } from "@/app/utils/constants/subsidiary-routes";
import { usePathname } from "next/navigation";
import { patientfiRoutes } from "@/app/utils/constants/patientfi-routes";
import { MobileSearch } from "@/app/components/PatientFi/MobileSearch";

function PFHeader({ showSearch = false }) {
  const path = usePathname();
  const cx = classNames.bind(styles);
  const [openMobileSearch, setOpenMobileSearch] = useState(false);

  const handleOpenMobileSearch = () => {
    setOpenMobileSearch(true);
  };

  return (
    <header className={cx("header__container")}>
      <div
        className={cx("header__wrapper", {
          "no-border": path !== patientfiRoutes.home,
        })}
      >
        <Link
          className={cx("header-logo__wrapper")}
          href={patientfiRoutes.home}
        >
          <Image
            src={"/assets/images/patientfi/patientfi-logo.svg"}
            width={161}
            height={37}
            alt={"PatientFi logo"}
          />
        </Link>
        <div className={cx("switch-to__wrapper")}>
          <div>Switch to</div>
          <Image
            className={cx("switch-to__logo")}
            src={"/assets/images/patientfi/privi-logo-header.svg"}
            width={88}
            height={26}
            alt={"Privi logo"}
          />
          <Link href={`${subsidiaryRoutes.home}`}>
            <Image
              className={cx("switch-to__icon")}
              src={"/assets/images/patientfi/switch-to.svg"}
              width={24}
              height={24}
              alt={"Switch to button"}
            />
          </Link>
          {showSearch && (
            <div className={cx("search__wrapper")}>
              <SearchInput
                onChange={() => {}}
                onKeyPress={() => {}}
                onClick={() => {}}
                value={""}
              />
            </div>
          )}
        </div>
        {path !== patientfiRoutes.home && (
          <div className={cx("header__mobile-search-wrapper")}>
            <Image
              src={"/assets/images/patientfi/search.svg"}
              alt={"Search icon"}
              width={24}
              height={24}
              onClick={handleOpenMobileSearch}
            />
          </div>
        )}
      </div>
      {openMobileSearch && (
        <MobileSearch setOpenMobileSearch={setOpenMobileSearch} />
      )}
    </header>
  );
}

export default PFHeader;
