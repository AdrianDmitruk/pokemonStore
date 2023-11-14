import { FC } from "react";
import { Outlet } from "react-router-dom";

import styles from "./Layouts.module.scss";
import { Header } from "..";

export const Layouts: FC = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
};
