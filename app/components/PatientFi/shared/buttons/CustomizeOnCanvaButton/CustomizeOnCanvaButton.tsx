import React, { PropsWithChildren } from "react";
import styles from "./CustomizeOnCanvaButton.module.scss";
import classNames from "classnames/bind";
import Image from "next/image";

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
      <Image
        className={cx("outlined-button__icon")}
        src={"/assets/images/patientfi/button_icons/canva-icon.svg"}
        alt={"Download"}
        width={55}
        height={20}
      />
    </button>
  );
}

export default OutlinedButton;
