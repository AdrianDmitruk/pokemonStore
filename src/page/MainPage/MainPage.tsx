import { FC } from "react";

import { Filters, Search } from "../../components";

import styles from "./MainPage.module.scss";

export const MainPage: FC = () => {
  return (
    <div className={styles.main}>
      <section className={styles.mainLeft}>
        <Filters />
      </section>
      <section className={styles.mainRight}>
        <Search />
      </section>
    </div>
  );
};
