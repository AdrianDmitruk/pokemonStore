import { useSelector } from "react-redux";
import { useAppDispatch } from "../redux/store";
import { useCallback } from "react";

import { selectUserData } from "../redux/user/selectors";
import { getUserFeatch } from "../redux/user/async-actions";

export const useUser = () => {
  const dispatch = useAppDispatch();

  const { data: userInfo, status: userStatus } = useSelector(selectUserData);

  const getUser = useCallback(() => {
    dispatch(getUserFeatch());
  }, [dispatch]);

  return {
    getUser,
    userInfo,
    userStatus,
  };
};
