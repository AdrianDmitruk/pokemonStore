import { FC, useEffect } from "react";
import { useAppDispatch } from "../../redux/store";
import { getProductFeatch } from "../../redux/product/async-actions";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectProductData } from "../../redux/product/selectors";
import { Status } from "../../redux/product/types";
import { Card, Image, Spin } from "antd";

import styles from "./FullProductPage.module.scss";
import { ButtonCart } from "../../components";

export const FullProductPage: FC = () => {
  const { id } = useParams();

  const { data, status } = useSelector(selectProductData);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(getProductFeatch(id));
    }
  }, [dispatch, id]);

  if (status === Status.LOADING) {
    return (
      <div className="load">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div className={styles.full}>
      <div className={styles.fullContent}>
        <Image width={400} src={data.image} />
        <div className={styles.fullStats}>
          {data.stats.map((item) => (
            <Card key={item.title} title={item.title}>
              {item.value}
            </Card>
          ))}
        </div>
      </div>
      <div className={styles.fullWrap}>
        <h2 className={styles.fullTitle}>{data.name}</h2>

        <span className={styles.fullPrice}>Price: {data.price}$</span>

        <ButtonCart elem={data} />

        <div className={styles.fullAbili}>
          <h3 className={styles.fullAbiliTitle}>Abilities:</h3>
          {data.abilities.map((elem) => (
            <div key={elem.title}>
              <h4 className={styles.fullAbiliName}>{elem.title}</h4>
              <p className={styles.fullAbiliDesc}>{elem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
