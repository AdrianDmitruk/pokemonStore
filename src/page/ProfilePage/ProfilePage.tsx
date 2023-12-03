import { FC, useEffect } from "react";

import styles from "./ProfilePage.module.scss";
import { BasketCard } from "../../components";
import { useAppDispatch } from "../../redux/store";
import { useSelector } from "react-redux";
import { selectOrderData } from "../../redux/order/selectors";
import { getOrderFeatch } from "../../redux/order/async-actions";
import { Descriptions, DescriptionsProps, Spin } from "antd";
import { Status } from "../../redux/cart/types";
import { formatDate } from "../../utils/formatData";
import { useUser } from "../../hooks/useUser";

export const ProfilePage: FC = () => {
  const { data, status } = useSelector(selectOrderData);

  const { userInfo, userStatus } = useUser();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getOrderFeatch());
  }, [dispatch]);

  const items: DescriptionsProps["items"] = [
    {
      key: "1",
      label: "First Name",
      children: <p>{userInfo.firstName}</p>,
    },
    {
      key: "2",
      label: "Last Name",
      children: <p>{userInfo.lastName}</p>,
    },
    {
      key: "3",
      label: "Email",
      children: <p>{userInfo.email}</p>,
    },
    {
      key: "4",
      label: "Phone",
      children: <p>{userInfo.phone}</p>,
    },
    {
      key: "5",
      label: "Gender",
      children: <p>{userInfo.gender}</p>,
    },
    {
      key: "6",
      label: "Address",
      children: (
        <p>
          {userInfo.address.addressLine1} {userInfo.address.addressLine2}
        </p>
      ),
    },
    {
      key: "7",
      label: "City",
      children: <p>{userInfo.address.city}</p>,
    },
    {
      key: "8",
      label: "Country",
      children: <p>{userInfo.address.country}</p>,
    },
  ];

  if (status === Status.LOADING && userStatus === Status.LOADING) {
    return (
      <div className="load">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div className={styles.profile}>
      <h2 className={styles.profileTitle}>Your Products</h2>

      <Descriptions items={items} />

      <div className={styles.profileItem}>
        <h3 className={styles.profileTitle}>Order</h3>
        {data.map((elem) => (
          <div className={styles.profileOrder} key={elem.createdAt}>
            <div className={styles.profileOrderHeader}>
              <h2>Date: {formatDate(elem.createdAt)}</h2>
              <span>Total Price: {elem.totalPrice}$</span>
            </div>
            {elem.itemsList.map((product) => (
              <BasketCard order key={product.id} elem={product} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
