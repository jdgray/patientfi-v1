import React from "react";
import styles from "./SubsidiaryFooter.module.scss";
import classNames from "classnames/bind";
import Image from "next/image";
import Link from "next/link";
import { SUBSIDIARY_THIRD_PARTY_LINKS } from "@/app/utils/constants/subsidiary-links";

function SubsidiaryFooter({ id }: { id?: string | string[] }) {
  const cx = classNames.bind(styles);
  return (
    <footer className={cx("footer__container", { mobilePadding: id })}>
      <div className={cx("footer__container-top-decor")}>
        <div className={cx("top")} />
        <div className={cx("bottom")} />
      </div>
      <div className={cx("footer__wrapper")}>
        <div className={cx("follow-us-logo__wrapper")}>
          <Link href={"/privi"}>
            <img
              className={cx("logo")}
              src={"/assets/images/subsidiary/logo.svg"}
              alt={"Privi logo"}
            />
          </Link>
          <div className={cx("follow-us__wrapper")}>
            <div className={cx("text")}>Follow us:</div>
            <Link
              href={SUBSIDIARY_THIRD_PARTY_LINKS.socialMedia.instagram}
              className={cx("icon")}
              target="_blank"
            >
              <Image
                src={"/assets/images/subsidiary/instagram.svg"}
                width={24}
                height={24}
                alt={"Instagram"}
              />
            </Link>
            <Link
              href={SUBSIDIARY_THIRD_PARTY_LINKS.socialMedia.facebook}
              className={cx("icon")}
              target="_blank"
            >
              <Image
                src={"/assets/images/subsidiary/facebook.svg"}
                width={24}
                height={24}
                alt={"Facebook"}
              />
            </Link>
            <Link
              href={SUBSIDIARY_THIRD_PARTY_LINKS.socialMedia.tikTok}
              className={cx("icon")}
              target="_blank"
            >
              <Image
                src={"/assets/images/subsidiary/tik-tok.svg"}
                width={24}
                height={24}
                alt={"Tik Tok"}
              />
            </Link>
          </div>
        </div>
        <div className={cx("data-on-file")}>
          1. PatientFi Data on File, Accessed 2023 2. PYMNTS.com “Relationship
          Commerce: Building Long-Term Brand Engagement.” June 2022
        </div>
        <div className={cx("divider")} />
        <div className={cx("policy__wrapper")}>
          <div className={cx("policy")}>
            <Link
              href={SUBSIDIARY_THIRD_PARTY_LINKS.privacyPolicy}
              target="_blank"
            >
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link
              href={SUBSIDIARY_THIRD_PARTY_LINKS.termsOfUse}
              target="_blank"
            >
              Terms of Use
            </Link>
          </div>
          <div className={cx("subsidiary")}>
            PRIVI is a subsidiary of PatientFi, LLC. NMLS ID #1719196.
          </div>
        </div>
      </div>
      <div className={cx("footer__background-wrapper")}>
        <Image
          src={"/assets/images/subsidiary/footer-background-left.svg"}
          alt={""}
          width={712}
          height={29}
        />
        <Image
          src={"/assets/images/subsidiary/footer-background-right.svg"}
          alt={""}
          width={614}
          height={29}
        />
      </div>
    </footer>
  );
}

export default SubsidiaryFooter;
