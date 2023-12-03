import { FC, useEffect } from "react";
import { Outlet } from "react-router-dom";

import styles from "./Layouts.module.scss";
import { Header } from "..";

import { useCart } from "../../hooks/useCart";
import { useUser } from "../../hooks/useUser";

export const Layouts: FC = () => {
  const { getCartInfo } = useCart();

  const { getUser } = useUser();

  useEffect(() => {
    getCartInfo();
    getUser();
  }, [getCartInfo, getUser]);

  return (
    <div className={styles.container}>
      <Header />
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
};
