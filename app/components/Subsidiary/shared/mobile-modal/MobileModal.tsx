import React, { Dispatch, SetStateAction, PropsWithChildren } from "react";
import classNames from "classnames/bind";
import styles from "./MobileModal.module.scss";
import Image from "next/image";

interface IMobileModalProps {
  setOpenMobileModal: Dispatch<SetStateAction<boolean>>;
  title?: string;
}

function MobileModal({
  children,
  setOpenMobileModal,
  title,
}: PropsWithChildren<IMobileModalProps>) {
  const cx = classNames.bind(styles);
  const handleCloseModal = () => setOpenMobileModal(false);

  return (
    <div className={cx("mobileModal__container")}>
      <div className={cx("title-close")}>
        <div className={cx("title")}>{title}</div>
        <Image
          className={cx("close")}
          src={"/assets/images/patientfi/close-icon.svg"}
          alt={"Close icon"}
          width={24}
          height={24}
          onClick={handleCloseModal}
        />
      </div>
      {children}
    </div>
  );
}

export default MobileModal;
