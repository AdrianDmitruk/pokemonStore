import { FC } from "react";

import close from "../../assets/icon/Close.svg";

import styles from "./Result.module.scss";
import { useSelector } from "react-redux";
import { selectProductsData } from "../../redux/products/selectors";
import { RootState, useAppDispatch } from "../../redux/store";
import { setPriceFrom, setPriceTo } from "../../redux/products/slice";

export const Result: FC = () => {
  const { data } = useSelector(selectProductsData);

  const dispatch = useAppDispatch();

  const priceFrom = useSelector<RootState, number | null>(
    (state) => state.products.priceFrom
  );
  const priceTo = useSelector<RootState, number | null>(
    (state) => state.products.priceTo
  );

  const handleResetFilters = () => {
    dispatch(setPriceFrom(null));
    dispatch(setPriceTo(null));
  };

  return (
    <div className={styles.result}>
      <div className={styles.resultHeader}>
        <h2 className={styles.resultHeaderNumber}>{data.length} results</h2>
      </div>
      {(priceFrom || priceTo) && (
        <div className={styles.resultMain}>
          <div className={styles.resultMainPrice}>
            ${priceFrom}-${priceTo}
          </div>
          <button onClick={handleResetFilters} className={styles.resultMainBtn}>
            <img src={close} alt="close" />
          </button>
        </div>
      )}
    </div>
  );
};
