"use client";
import React from "react";
import styles from "./DetailsHeader.module.scss";
import classNames from "classnames/bind";
import Image from "next/image";
import { CustomizeOnCanvaButton } from "@/app/components/Subsidiary/shared/buttons/CustomizeOnCanvaButton";
import { DownloadButton } from "@/app/components/Subsidiary/shared/buttons/DownloadButton";
import { useRouter } from "next/navigation";

interface IProps {
  title: string;
  showCanva?: boolean;
  download: { url: string } | null;
}

function DetailsHeader({ title, showCanva, download }: IProps) {
  const cx = classNames.bind(styles);
  const router = useRouter();
  return (
    <section className={cx("DetailsHeader__container")}>
      <div className={cx("DetailsHeader__title-container")}>
        <Image
          src={"/assets/images/subsidiary/arrow-back.svg"}
          width={35}
          height={16}
          alt={"Back arrow"}
          onClick={router.back}
        />
        <h1 className={cx("DetailsHeader__title-desktop")}>{title}</h1>
        <h1 className={cx("DetailsHeader__title-mobile")}>Back</h1>
      </div>
      <div className={cx("DetailsHeader__buttons-container")}>
        {showCanva && <CustomizeOnCanvaButton onClick={() => {}} />}
        <DownloadButton url={download?.url} />
      </div>
    </section>
  );
}

export default DetailsHeader;
