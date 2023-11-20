import { FC, useState, useEffect, ChangeEvent } from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../../redux/products/slice";
import styles from "./Search.module.scss";

export const Search: FC = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    dispatch(setSearchQuery(value));
  }, [value, dispatch]);

  return (
    <Input
      size="large"
      placeholder="Type to search..."
      className={styles.input}
      onChange={handleSearchChange}
      value={value}
      prefix={<SearchOutlined className={styles.inputIcon} />}
    />
  );
};
