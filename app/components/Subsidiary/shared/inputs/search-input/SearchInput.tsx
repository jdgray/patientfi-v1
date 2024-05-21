import React from "react";
import Image from "next/image";
import classNames from "classnames/bind";
import styles from "./SearchInput.module.scss";

interface IInputProps {
  value: string;
  style?: {
    [key: string]: string;
  };
  onChange: (e: React.SyntheticEvent) => void;
  onClick: (e: React.SyntheticEvent) => void;
  onKeyPress: (e: React.KeyboardEvent) => void;
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
        {...rest}
      />
      <div className={cx("search-input__icon-wrapper")}>
        <Image
          className={cx("search-input__icon")}
          width={16}
          height={16}
          src={"/assets/images/subsidiary/search.svg"}
          alt={"Search"}
          onClick={onClick}
        />
      </div>
    </div>
  );
}

export default SearchInput;
