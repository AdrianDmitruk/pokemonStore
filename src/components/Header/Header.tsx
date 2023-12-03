import { FC } from "react";

import styles from "./Header.module.scss";
import { Link, NavLink, useLocation } from "react-router-dom";

import logo from "../../assets/logo.png";
import { Cart } from "../../assets/icon/Cart";
import { Logout } from "../../assets/icon/Logout";
import { useAppDispatch } from "../../redux/store";
import { logout } from "../../redux/auth/slice";
import { TOKEN_JWT } from "../../constans";
import { useCart } from "../../hooks/useCart";

export const Header: FC = () => {
  const { cartInfo } = useCart();

  const dispatch = useAppDispatch();

  const location = useLocation();

  const patch = location.pathname === "/basket";

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem(TOKEN_JWT);
  };

  return (
    <header className={styles.header}>
      <Link to={""} className={styles.headerLogo}>
        <img className={styles.headerLogoImg} src={logo} alt="logo" />
        <span>PokeStore</span>
      </Link>

      <nav className={styles.headerNav}>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.headerNavLinkActive : styles.headerNavLink
          }
          to={""}
        >
          Marketplace
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.headerNavLinkActive : styles.headerNavLink
          }
          to={"/profile"}
        >
          Your Profile
        </NavLink>
      </nav>
      <div className={styles.headerLeft}>
        <NavLink className={styles.headerCart} to={"/basket"}>
          {!!cartInfo.quantity && (
            <span className={styles.headerCartQuantity}>
              {cartInfo.quantity}
            </span>
          )}

          <Cart fill={patch ? "#2b77eb" : "#767676"} />
        </NavLink>
        <button onClick={handleLogout}>
          <Logout />
        </button>
      </div>
    </header>
  );
};
