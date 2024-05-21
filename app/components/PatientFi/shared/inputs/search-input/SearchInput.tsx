import React from "react";
import Image from "next/image";
import classNames from "classnames/bind";
import styles from "./SearchInput.module.scss";

interface IInputProps {
  style?: {
    [key: string]: string;
  };
  onChange: (e: React.SyntheticEvent) => void;
  onClick: (e: React.SyntheticEvent) => void;
  onKeyPress: (e: React.KeyboardEvent) => void;
  value: string;
  placeholder?: string;
}

function SearchInput({ onChange, onClick, ...rest }: IInputProps) {
  const cx = classNames.bind(styles);
  return (
    <div className={cx("search-input__container")}>
      <input
        className={cx("search-input__input")}
        type={"text"}
        onChange={onChange}
        placeholder={"Search by category, subject, platform, etc...."}
        {...rest}
      />
      <div className={cx("search-input__icon-wrapper")}>
        <Image
          className={cx("search-input__icon")}
          width={25}
          height={25}
          src={"/assets/images/patientfi/search.svg"}
          alt={"Search"}
          onClick={onClick}
        />
      </div>
    </div>
  );
}

export default SearchInput;
