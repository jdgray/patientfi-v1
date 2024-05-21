import React, { Dispatch, SetStateAction, useState } from "react";
import classNames from "classnames/bind";
import styles from "./MobileSort.module.scss";
import MobileModal from "../shared/mobile-modal/MobileModal";
import { sortOptions } from "@/app/utils/constants/sort-filter-options";

interface IMobileSortProps {
  setOpenMobileSort: Dispatch<SetStateAction<boolean>>;
}

function MobileSort({ setOpenMobileSort }: IMobileSortProps) {
  const cx = classNames.bind(styles);
  const [selectedOption, setSelectedOption] = useState(sortOptions[0]);

  const handleChooseOption =
    (option: { label: string; value: string }) => () => {
      setSelectedOption(option);
      setOpenMobileSort(false);
    };

  return (
    <MobileModal setOpenMobileModal={setOpenMobileSort} title={"Sort By:"}>
      <div className={cx("sort-container")}>
        <div className={cx("Sort-select-options")}>
          {sortOptions.map((option, index) => {
            return (
              <option
                key={index}
                data-value={option?.value}
                onClick={handleChooseOption(option)}
              >
                {option?.label}
              </option>
            );
          })}
        </div>
      </div>
    </MobileModal>
  );
}

export default MobileSort;
