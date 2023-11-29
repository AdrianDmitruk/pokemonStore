import { FC, useEffect } from "react";
import { useAppDispatch } from "../../redux/store";
import { getProductFeatch } from "../../redux/product/async-actions";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectProductData } from "../../redux/product/selectors";
import { Status } from "../../redux/product/types";
import { Card, Image, Spin } from "antd";

import style from "./FullProductPage.module.scss";
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
    return <Spin size="large" />;
  }

  return (
    <div className={style.full}>
      <div className={style.fullContent}>
        <Image width={400} src={data.image} />
        <div className={style.fullStats}>
          {data.stats.map((item) => (
            <Card key={item.title} title={item.title}>
              {item.value}
            </Card>
          ))}
        </div>
      </div>
      <div className={style.fullWrap}>
        <h2 className={style.fullTitle}>{data.name}</h2>

        <span className={style.fullPrice}>Price: {data.price}$</span>

        <ButtonCart elem={data} />

        <div className={style.fullAbili}>
          <h3 className={style.fullAbiliTitle}>Abilities:</h3>
          {data.abilities.map((elem) => (
            <div key={elem.title}>
              <h4 className={style.fullAbiliName}>{elem.title}</h4>
              <p className={style.fullAbiliDesc}>{elem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
