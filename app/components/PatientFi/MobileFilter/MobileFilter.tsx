import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import classNames from "classnames/bind";
import styles from "./MobileFilter.module.scss";
import MobileModal from "../shared/mobile-modal/MobileModal";
import { filterOptions } from "@/app/utils/constants/sort-filter-options";
import ContainedButton from "../shared/buttons/ContainedButton/ContainedButton";

interface IMobileFilterProps {
  setOpenMobileFilter: Dispatch<SetStateAction<boolean>>;
}

type Option = { label: string; value: string };

function MobileFilter({ setOpenMobileFilter }: IMobileFilterProps) {
  const cx = classNames.bind(styles);
  const filterRefOptions = useRef(null);
  const [selectedFilters, setSelectedFilters] = useState<Array<Option>>([]);

  const checked = (option: Option) =>
    selectedFilters?.some((filter) => filter.value === option.value);

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

  return (
    <MobileModal setOpenMobileModal={setOpenMobileFilter} title={"FIlter By:"}>
      <div className={cx("filter-container")}>
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
      </div>
      <div className={cx("button-container")}>
        <ContainedButton
          onClick={() => {}}
          style={{
            maxWidth: "100%",
            background: "var(--patientfi-charge-1)",
            color: "var(--subsidiary-white-main)",
          }}
        >
          Apply
        </ContainedButton>
      </div>
    </MobileModal>
  );
}

export default MobileFilter;
