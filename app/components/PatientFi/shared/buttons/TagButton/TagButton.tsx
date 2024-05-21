import React, { PropsWithChildren } from "react";
import styles from "./TagButton.module.scss";
import classNames from "classnames/bind";

interface IButtonLinkProps {
  style?: {
    [key: string]: string;
  };
  onClick: (e: React.SyntheticEvent) => void;
}

function ContainedButton({
  children,
  style = {},
  onClick,
}: PropsWithChildren<IButtonLinkProps>) {
  const cx = classNames.bind(styles);
  return (
    <button className={cx("tag-button")} onClick={onClick} style={style}>
      {children}
    </button>
  );
}

export default ContainedButton;
