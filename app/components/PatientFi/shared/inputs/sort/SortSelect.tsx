import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";
import styles from "./SortSelect.module.scss";
import Image from "next/image";
import { MobileSort } from "@/app/components/PatientFi/MobileSort";
import { sortOptions } from "@/app/utils/constants/sort-filter-options";

function SortSelect() {
  const sortRefOptions = useRef<null | HTMLDivElement>(null);
  const sortRefButton = useRef<null | HTMLDivElement>(null);
  const sortRefButtonMobile = useRef<null | HTMLImageElement>(null);
  const cx = classNames.bind(styles);
  const [selectedOption, setSelectedOption] = useState(sortOptions[0]);
  const [openSort, setOpenSort] = useState(false);
  const [openMobileSort, setOpenMobileSort] = useState(false);

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (sortRefButton?.current?.contains(event.target as Node)) return;
      if (sortRefButtonMobile?.current?.contains(event.target as Node)) return;
      if (
        sortRefOptions.current &&
        !sortRefOptions.current.contains(event.target as Node)
      ) {
        setOpenSort(false);
      }
    }
    document.addEventListener("mousedown", handleOutsideClick);

    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const handleOpenSort = () => setOpenSort(!openSort);
  const handleOpenMobileSort = () => setOpenMobileSort(true);
  const handleChooseOption =
    (option: { label: string; value: string }) => () => {
      setSelectedOption(option);
      setOpenSort(!openSort);
    };

  return (
    <>
      <div className={cx("Sort-select-wrapper")}>
        <div
          ref={sortRefButton}
          className={cx("Sort-select-button")}
          onClick={handleOpenSort}
        >
          Sort By: {selectedOption?.label}
          <Image
            className={cx({ opened: openSort })}
            width={20}
            height={10}
            src={"/assets/images/patientfi/sort-filter-arrow.svg"}
            alt={"arrow"}
          />
        </div>
        <Image
          ref={sortRefButtonMobile}
          className={cx("Sort-select-button-mobile")}
          src={"/assets/images/subsidiary/mobile-sort-icon.svg"}
          width={24}
          height={24}
          alt={"Filter icon"}
          onClick={handleOpenMobileSort}
        />
        {openSort && (
          <div ref={sortRefOptions} className={cx("Sort-select-options")}>
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
        )}
        {openMobileSort && <MobileSort setOpenMobileSort={setOpenMobileSort} />}
      </div>
    </>
  );
}

export default SortSelect;
