import { FC } from "react";

import content from "../../assets/Content2.png";
import minus from "../../assets/icon/Minus.svg";
import plus from "../../assets/icon/Plus.svg";
import cross from "../../assets/icon/Cross.svg";

import styles from "./BasketCard.module.scss";

export const BasketCard: FC = () => {
  return (
    <div className={styles.item}>
      <img className={styles.itemImg} src={content} alt="content" />
      <h3 className={styles.itemTitle}>DJI Pocket 2 Creator Combo</h3>
      <span className={styles.itemPrise}>$499</span>
      <div className={styles.itemQuantity}>
        <button>
          <img src={minus} alt="minus" />
        </button>
        <span>1</span>
        <button>
          <img src={plus} alt="plus" />
        </button>
      </div>

      <button className={styles.itemRemove}>
        <img src={cross} alt="cross" />
        <span>Remove</span>
      </button>
    </div>
  );
};
