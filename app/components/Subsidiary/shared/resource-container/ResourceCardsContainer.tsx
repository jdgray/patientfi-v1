"use client";
import React, { PropsWithChildren } from "react";
import classNames from "classnames/bind";
import styles from "./ResourceCardsContainer.module.scss";
import SortSelect from "@/app/components/Subsidiary/shared/inputs/sort/SortSelect";
import Link from "next/link";
import FilterSelect from "@/app/components/Subsidiary/shared/inputs/filter-select/FilterSelect";
import { useSearchParams } from "next/navigation";
import { subsidiaryRoutes } from "@/app/utils/constants/subsidiary-routes";

function ResourceCardsContainer({
  children,
  title,
  searchPage,
}: PropsWithChildren<{ title: string; searchPage?: boolean }>) {
  const cx = classNames.bind(styles);
  const params = useSearchParams();
  const search = params.get("value");

  return (
    <section className={cx("ResourceCards__container")}>
      {searchPage ? (
        <div className={cx("Search__filter-sort-container")}>
          <div className={cx("Search__info")}>
            <div
              className={cx("Search__info-text")}
            >{`SEARCH RESULS FOR “${search || ""}”`}</div>
            <Link href={subsidiaryRoutes.search}>clear search</Link>
          </div>
          <div className={cx("Search__filter-sort")}>
            <SortSelect />
            <FilterSelect />
          </div>
        </div>
      ) : (
        <section className={cx("ResourceCards__header")}>
          <h1>{title}</h1>
          <div className={cx("ResourceCards__header-sort")}>
            <SortSelect />
          </div>
        </section>
      )}
      <section className={cx("ResourceCards__result-wrapper")}>
        {children}
      </section>
    </section>
  );
}

export default ResourceCardsContainer;
