import React, { PropsWithChildren } from "react";
import styles from "./ContainedButtonLink.module.scss";
import classNames from "classnames/bind";
import Link from "next/link";
import Image from "next/image";

interface IButtonLinkProps {
  href: string;
  icon?: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
  style?: {
    [key: string]: string;
  };
}

function ContainedButtonLink({
  children,
  href,
  icon,
  style = {},
}: PropsWithChildren<IButtonLinkProps>) {
  const cx = classNames.bind(styles);
  return (
    <Link className={cx("contained-button")} href={href} style={style}>
      {icon && (
        <Image
          className={cx("contained-button__icon")}
          src={icon?.url}
          alt={icon?.alt}
          width={icon?.width}
          height={icon?.height}
        />
      )}
      {children}
    </Link>
  );
}

export default ContainedButtonLink;
