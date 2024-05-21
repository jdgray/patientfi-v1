import React, { useState } from "react";
import styles from "./SubsidiaryHeader.module.scss";
import classNames from "classnames/bind";
import Image from "next/image";
import Link from "next/link";
import { SearchInput } from "../shared/inputs/search-input";
import { usePathname } from "next/navigation";
import { MobileSearch } from "@/app/components/PatientFi/MobileSearch";
import { subsidiaryRoutes } from "@/app/utils/constants/subsidiary-routes";

function SubsidiaryHeader({ showSearch = false }) {
  const path = usePathname();
  const cx = classNames.bind(styles);
  const [openMobileSearch, setOpenMobileSearch] = useState(false);

  const handleOpenMobileSearch = () => {
    setOpenMobileSearch(true);
  };
  return (
    <header
      className={cx("header__container", {
        hide: path === subsidiaryRoutes.home,
      })}
    >
      <div className={cx("header__wrapper")}>
        <Link href={subsidiaryRoutes.home}>
          <Image
            className={cx("header__logo")}
            src={"/assets/images/subsidiary/logo.svg"}
            width={170}
            height={54}
            alt={"Privi logo"}
          />
        </Link>
        <div className={cx("switch-to__wrapper")}>
          <div className={cx("switch-to__text")}>Switch to</div>
          <Image
            className={cx("switch-to__logo")}
            src={"/assets/images/subsidiary/patient-fi-logo.svg"}
            width={69}
            height={16}
            alt={"PatientFi logo"}
          />
          <Link href={"/patientfi"}>
            <Image
              src={"/assets/images/subsidiary/switch-to.svg"}
              width={24}
              height={24}
              alt={"Switch to button"}
            />
          </Link>
          {showSearch && (
            <div className={cx("search__wrapper")}>
              <SearchInput
                onChange={() => {}}
                onClick={() => {}}
                onKeyPress={() => {}}
                value={""}
                placeholder={"Search"}
              />
            </div>
          )}
        </div>
        <div className={cx("header__mobile-search-wrapper")}>
          <Image
            src={"/assets/images/subsidiary/search.svg"}
            alt={"Search icon"}
            width={24}
            height={24}
            onClick={handleOpenMobileSearch}
          />
        </div>
      </div>
      {openMobileSearch && (
        <MobileSearch setOpenMobileSearch={setOpenMobileSearch} />
      )}
    </header>
  );
}

export default SubsidiaryHeader;
