import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";
import styles from "./FilterSelect.module.scss";
import Image from "next/image";
import { MobileFilter } from "@/app/components/PatientFi/MobileFilter";
import { filterOptions } from "@/app/utils/constants/sort-filter-options";

type Option = { label: string; value: string };

function FilterSelect() {
  const filterRefOptions = useRef<null | HTMLDivElement>(null);
  const filterRefButton = useRef<null | HTMLDivElement>(null);
  const filterRefButtonMobile = useRef<null | HTMLImageElement>(null);
  const cx = classNames.bind(styles);
  const [selectedFilters, setSelectedFilters] = useState<Array<Option>>([]);
  const [openFilter, setOpenFilter] = useState(false);
  const [openMobileFilter, setOpenMobileFilter] = useState(false);

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (filterRefButton?.current?.contains(event.target as Node)) return;
      if (filterRefButtonMobile?.current?.contains(event.target as Node))
        return;
      if (
        filterRefOptions.current &&
        !filterRefOptions.current.contains(event.target as Node)
      ) {
        setOpenFilter(false);
      }
    }
    document.addEventListener("mousedown", handleOutsideClick);

    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const handleOpenFilter = () => setOpenFilter(!openFilter);
  const handleOpenMobileFilter = () => setOpenMobileFilter(!openFilter);
  const handleChooseOption = (option: Option) => () => {
    if (filterRefOptions?.current === null) return;

    const inputChecked = (
      filterRefOptions?.current as HTMLDivElement
    )?.querySelector(`input[data-value=${option?.value}]`) as HTMLInputElement;

    if (inputChecked.checked) {
      const newSelected = selectedFilters?.filter(
        (filter) => filter.value !== option.value,
      );

      setSelectedFilters(newSelected);
      return;
    }
    if (!selectedFilters) {
      setSelectedFilters([option]);
    } else {
      setSelectedFilters([...selectedFilters, option]);
    }
  };

  const checked = (option: Option) =>
    selectedFilters?.some((filter) => filter.value === option.value);

  return (
    <>
      <div className={cx("Filter-select-wrapper")}>
        <div
          ref={filterRefButton}
          className={cx("Filter-select-button")}
          onClick={handleOpenFilter}
        >
          Filter: Select
          <Image
            className={cx({ opened: openFilter })}
            width={20}
            height={10}
            src={"/assets/images/patientfi/sort-filter-arrow.svg"}
            alt={"arrow"}
          />
        </div>
        <Image
          ref={filterRefButtonMobile}
          className={cx("Filter-select-button-mobile")}
          src={"/assets/images/subsidiary/mobile-filter-icon.svg"}
          width={24}
          height={24}
          alt={"Filter icon"}
          onClick={handleOpenMobileFilter}
        />
        {openFilter && (
          <div ref={filterRefOptions} className={cx("Filter-select-options")}>
            {filterOptions.map((option, index) => {
              return (
                <div
                  className={cx("option")}
                  key={index}
                  data-value={option?.value}
                  onClick={handleChooseOption(option)}
                >
                  <label className={cx("container")}>
                    {option?.label}
                    <input
                      type="checkbox"
                      data-value={option?.value}
                      checked={Boolean(checked(option))}
                    />
                    <span className={cx("checkmark")}></span>
                  </label>
                </div>
              );
            })}
          </div>
        )}
      </div>
      {openMobileFilter && (
        <MobileFilter setOpenMobileFilter={setOpenMobileFilter} />
      )}
    </>
  );
}

export default FilterSelect;
