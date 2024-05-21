import React, { PropsWithChildren } from "react";
import styles from "./DownloadButton.module.scss";
import classNames from "classnames/bind";
import Image from "next/image";
import Link from "next/link";

interface IButtonLinkProps {
  style?: {
    [key: string]: string;
  };
  url?: string;
}

function ContainedButton({
  style = {},
  url,
}: PropsWithChildren<IButtonLinkProps>) {
  const cx = classNames.bind(styles);
  return (
    <Link
      className={cx("contained-button")}
      href={url || ""}
      style={style}
      download={!!url}
      target={url ? "_blank" : "_self"}
    >
      Download
      <Image
        className={cx("contained-button__icon")}
        src={"/assets/images/subsidiary/button_icons/download-icon.svg"}
        alt={"Download"}
        width={24}
        height={24}
      />
    </Link>
  );
}

export default ContainedButton;
