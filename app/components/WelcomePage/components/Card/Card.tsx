import React from "react";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames/bind";
import styles from "./Card.module.scss";

interface ICardProps {
  logo?: string;
  description: string;
  btnText: string;
  href: string;
}

function Card({
  logo = "patientfi",
  description = "",
  btnText = "",
  href = "",
}: ICardProps) {
  const cx = classNames.bind(styles);
  return (
    <Link className={cx("WelcomeCard__container")} href={href}>
      <div className={cx("WelcomeCard__card-logo")}>
        {logo === "patientfi" ? (
          <Image
            width={229}
            height={52}
            alt={"PatientFi logo"}
            src={"/assets/images/welcome/patientfi-logo.svg"}
          />
        ) : (
          <Image
            width={215}
            height={83}
            alt={"PatientFi logo"}
            src={"/assets/images/welcome/privi-logo.svg"}
          />
        )}
      </div>
      <div className={cx("WelcomeCard__card-description")}>{description}</div>
      <div className={cx("WelcomeCard__card-button")}>
        {btnText}
        <Image
          width={6}
          height={14}
          src={"/assets/images/welcome/arrow.svg"}
          alt={"Arrow"}
        />
      </div>
    </Link>
  );
}

export default Card;
