import { FC } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import {
  AuthPage,
  BasketPage,
  FullProductPage,
  MainPage,
  ProfilePage,
} from "./page";
import { Layouts } from "./components";
import { PrivateRoute, PublicRoute } from "./router";

const App: FC = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route element={<Layouts />}>
            <Route element={<PrivateRoute />}>
              <Route path={"/"} element={<MainPage />} />
              <Route path={"/basket"} element={<BasketPage />} />
              <Route path={"/profile"} element={<ProfilePage />} />
              <Route path={"/product/:id"} element={<FullProductPage />} />
            </Route>
          </Route>
          <Route element={<PublicRoute />}>
            <Route path={"/login"} element={<AuthPage type="login" />} />
            <Route path={"/register"} element={<AuthPage type="register" />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
