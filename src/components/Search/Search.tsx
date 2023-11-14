import { FC } from "react";

import { Input } from "antd";

import search from "../../assets/icon/Search.svg";

import styles from "./Search.module.scss";

export const Search: FC = () => {
  return (
    <Input
      size="large"
      placeholder="Type to search..."
      className={styles.input}
      prefix={
        <>
          <img className={styles.inputImg} src={search} alt="search" />
        </>
      }
    />
  );
};
