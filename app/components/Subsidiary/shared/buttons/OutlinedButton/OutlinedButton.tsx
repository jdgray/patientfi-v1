import React, { PropsWithChildren } from "react";
import styles from "./OutlinedButton.module.scss";
import classNames from "classnames/bind";

interface IButtonLinkProps {
  style?: {
    [key: string]: string;
  };
  onClick: (e: React.SyntheticEvent) => void;
}

function OutlinedButton({
  children,
  style = {},
  onClick,
}: PropsWithChildren<IButtonLinkProps>) {
  const cx = classNames.bind(styles);
  return (
    <button className={cx("outlined-button")} onClick={onClick} style={style}>
      {children}
    </button>
  );
}

export default OutlinedButton;
