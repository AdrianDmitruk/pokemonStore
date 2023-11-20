import { FC } from "react";

import styles from "./Header.module.scss";
import { Link, NavLink } from "react-router-dom";

import logo from "../../assets/logo.png";
import { Cart } from "../../assets/icon/Cart";
import { Logout } from "../../assets/icon/Logout";
import { useAppDispatch } from "../../redux/store";
import { logout } from "../../redux/auth/slice";
import { TOKEN_JWT } from "../../constans";

export const Header: FC = () => {
  const dispatch = useAppDispatch();

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
          to={"/products"}
        >
          Your Products
        </NavLink>
      </nav>
      <div className={styles.headerLeft}>
        <NavLink
          //   className={({ isActive }) =>
          //     isActive ? styles.headerNavLinkActive : styles.headerNavLink
          //   }

          className={styles.headerCart}
          to={"/basket"}
        >
          <span className={styles.headerCartQuantity}>2</span>
          <Cart />
        </NavLink>
        <button onClick={handleLogout}>
          <Logout />
        </button>
      </div>
    </header>
  );
};
