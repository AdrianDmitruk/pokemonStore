import { FC, useEffect } from "react";
import { Outlet } from "react-router-dom";

import styles from "./Layouts.module.scss";
import { Header } from "..";

import { useCart } from "../../hooks/useCart";

export const Layouts: FC = () => {
  const { getCartInfo } = useCart();

  useEffect(() => {
    getCartInfo();
  }, [getCartInfo]);

  return (
    <div className={styles.container}>
      <Header />
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
};
