import { FC, useState, ChangeEvent } from "react";

import { Button, Input } from "antd";

import reset from "../../assets/icon/Reset.svg";

import styles from "./Filters.module.scss";
import { useAppDispatch } from "../../redux/store";
import { setPriceFrom, setPriceTo } from "../../redux/products/slice";

export const Filters: FC = () => {
  const [fromValue, setFromValue] = useState<string>("");
  const [toValue, setToValue] = useState<string>("");

  const dispatch = useAppDispatch();

  const handleFromInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFromValue(event.target.value);
  };

  const handleToInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setToValue(event.target.value);
  };

  const handleApplyFilters = () => {
    dispatch(setPriceFrom(+fromValue));
    dispatch(setPriceTo(+toValue));
  };

  const handleResetFilters = () => {
    dispatch(setPriceFrom(null));
    dispatch(setPriceTo(null));
    setFromValue("");
    setToValue("");
  };

  return (
    <div className={styles.filters}>
      <div className={styles.filtersHeader}>
        <h3 className={styles.filtersHeaderTitle}>Filters</h3>
        <button
          onClick={handleResetFilters}
          className={styles.filtersHeaderBtn}
        >
          Reset All <img src={reset} alt="reset" />
        </button>
      </div>

      <div className={styles.filtersMain}>
        <h3 className={styles.filtersMainTitle}>Price</h3>
        <div className={styles.filtersMainStep}>
          <Input
            size="large"
            className={styles.filtersMainStepInput}
            prefix={<span className={styles.filtersMainStepPrefix}>From:</span>}
            onChange={handleFromInputChange}
            value={fromValue}
          />
          <Input
            size="large"
            className={styles.filtersMainStepInput}
            prefix={<span className={styles.filtersMainStepPrefix}>To:</span>}
            onChange={handleToInputChange}
            value={toValue}
          />
        </div>

        <Button onClick={handleApplyFilters} type="primary">
          Go
        </Button>
      </div>
    </div>
  );
};
