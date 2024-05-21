import React, { Dispatch, SetStateAction, useState } from "react";
import classNames from "classnames/bind";
import styles from "./MobileSearch.module.scss";
import Image from "next/image";
import { SearchInput } from "@/app/components/PatientFi/shared/inputs/search-input";
import { subsidiaryRoutes } from "@/app/utils/constants/subsidiary-routes";
import { useRouter } from "next/navigation";
import Link from "next/link";
import MobileModal from "../shared/mobile-modal/MobileModal";

interface IMobileSearchProps {
  setOpenMobileSearch: Dispatch<SetStateAction<boolean>>;
}

function MobileSearch({ setOpenMobileSearch }: IMobileSearchProps) {
  const router = useRouter();
  const cx = classNames.bind(styles);
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e: React.SyntheticEvent) =>
    setSearchValue((e.target as HTMLInputElement).value);
  const handleClick = () => {
    if (!searchValue.trim()) return;

    router.push(
      `${subsidiaryRoutes.search}?value=${encodeURIComponent(searchValue.trim())}`,
    );
    setOpenMobileSearch(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.code === "Enter") handleClick();
  };
  return (
    <MobileModal setOpenMobileModal={setOpenMobileSearch}>
      <Link href={subsidiaryRoutes.home} className={cx("mobileSearch__logo")}>
        <Image
          src={"/assets/images/patientfi/patientfi-logo.svg"}
          alt={"Logo"}
          width={111}
          height={34}
        />
      </Link>
      <div className={cx("mobileSearch__search-container")}>
        <SearchInput
          placeholder={""}
          value={searchValue}
          onChange={handleChange}
          onClick={handleClick}
          onKeyPress={handleKeyPress}
        />
      </div>
    </MobileModal>
  );
}

export default MobileSearch;
