import { FC, useEffect, useState } from "react";

import { Card, Filters, Result, Search } from "../../components";

import styles from "./MainPage.module.scss";
import { Pagination, Spin } from "antd";
import { RootState, useAppDispatch } from "../../redux/store";
import { fetchProducts } from "../../redux/products/async-actions";
import { useSelector } from "react-redux";
import { selectProductsData } from "../../redux/products/selectors";
import { Status } from "../../redux/auth/types";
import { useLocation, useNavigate } from "react-router-dom";

export const MainPage: FC = () => {
  const { data, status } = useSelector(selectProductsData);

  const searchQuery = useSelector<RootState, string>(
    (state) => state.products.searchQuery
  );
  const priceFrom = useSelector<RootState, number | null>(
    (state) => state.products.priceFrom
  );
  const priceTo = useSelector<RootState, number | null>(
    (state) => state.products.priceTo
  );

  const location = useLocation();
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const limit = 20;

  const dispatch = useAppDispatch();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const pageParam = searchParams.get("page");
    const page = pageParam ? Number(pageParam) : 1;

    setCurrentPage(page);
    dispatch(fetchProducts({ page, limit }));
  }, [dispatch, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    navigate(`${location.pathname}?page=${page}`);
  };

  return (
    <>
      <div className={styles.main}>
        <section className={styles.mainLeft}>
          <Filters />
        </section>
        <section className={styles.mainRight}>
          <Search />
          {(searchQuery || priceFrom || priceTo) && <Result />}
          <div className={styles.mainRightCard}>
            {status === Status.LOADING ? (
              <Spin size="large" />
            ) : (
              data.map((elem) => <Card key={elem._id} elem={elem} />)
            )}
          </div>
        </section>
      </div>
      <div className={styles.pagination}>
        <Pagination
          defaultCurrent={currentPage}
          total={480}
          onChange={handlePageChange}
        />
      </div>
    </>
  );
};
