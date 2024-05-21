import React from "react";
import Link from "next/link";
import classNames from "classnames/bind";
import styles from "./AnnouncementsBar.module.scss";
import { usePathname } from "next/navigation";

function AnnouncementsBar() {
  const path = usePathname();
  const showAnnouncements = path.includes("social-media");
  const cx = classNames.bind(styles);

  if (!showAnnouncements) return;

  return (
    <section className={cx("Announcements__container")}>
      Want customs assets for your practice?&nbsp;
      <Link href={"#"}>Fill out a request form</Link>
    </section>
  );
}

export default AnnouncementsBar;
