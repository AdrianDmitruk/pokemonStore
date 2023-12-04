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

import cn from "classnames";

export const MainPage: FC = () => {
  const { data, status, searchQuery } = useSelector(selectProductsData);

  const priceFrom = useSelector<RootState, number | null>(
    (state) => state.products.priceFrom
  );
  const priceTo = useSelector<RootState, number | null>(
    (state) => state.products.priceTo
  );

  const [currentPage, setCurrentPage] = useState<number>(1);

  const [limitPage, setLimitPage] = useState<number>(10);

  const location = useLocation();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const pageParam = searchParams.get("page");
    const page = pageParam ? Number(pageParam) : 1;

    setCurrentPage(page);
  }, [location.search]);

  useEffect(() => {
    dispatch(
      fetchProducts({
        page: currentPage,
        limit: limitPage,
        name: searchQuery,
      })
    );
  }, [dispatch, currentPage, searchQuery, priceFrom, priceTo, limitPage]);

  const handlePageChange = (page: number, pageSize: number) => {
    setCurrentPage(page);
    setLimitPage(pageSize);
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
          <div
            className={cn(styles.mainRightCard, {
              [styles.mainRightCardLoad]: status === Status.LOADING,
            })}
          >
            {status === Status.LOADING ? (
              <Spin size="large" />
            ) : (
              data.products.map((elem) => <Card key={elem._id} elem={elem} />)
            )}
          </div>
        </section>
      </div>
      <div className={styles.pagination}>
        {status === Status.SUCCESS && data.totalProducts >= limitPage && (
          <Pagination
            defaultCurrent={currentPage}
            total={data.totalProducts}
            onChange={handlePageChange}
            defaultPageSize={limitPage}
            pageSizeOptions={[10, 20]}
          />
        )}
      </div>
    </>
  );
};
