import { FC } from "react";

import { Card, Filters, Result, Search } from "../../components";

import styles from "./MainPage.module.scss";
import { Pagination } from "antd";

export const MainPage: FC = () => {
  return (
    <>
      <div className={styles.main}>
        <section className={styles.mainLeft}>
          <Filters />
        </section>
        <section className={styles.mainRight}>
          <Search />
          <Result />
          <div className={styles.mainRightCard}>
            <Card />
          </div>
        </section>
      </div>
      <div className={styles.pagination}>
        <Pagination defaultCurrent={1} total={50} />
      </div>
    </>
  );
};
