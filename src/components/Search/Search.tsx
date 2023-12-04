import { FC, useState, ChangeEvent, useEffect } from "react";
import { Button, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../../redux/products/slice";
import styles from "./Search.module.scss";

export const Search: FC = () => {
  const [value, setValue] = useState("");

  const { Search } = Input;

  const dispatch = useDispatch();

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSearch = () => {
    dispatch(setSearchQuery(value));
  };

  useEffect(() => {
    if (value === "") {
      setValue("");
      dispatch(setSearchQuery(""));
    }
  }, [value, dispatch]);

  return (
    <Search
      size="large"
      placeholder="Type to search..."
      className={styles.input}
      onChange={handleSearchChange}
      value={value}
      prefix={<SearchOutlined className={styles.inputIcon} />}
      allowClear
      enterButton={
        <Button onClick={handleSearch} type="primary">
          Search
        </Button>
      }
    />
  );
};
