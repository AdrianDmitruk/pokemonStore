import { FC } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { AuthPage, BasketPage, MainPage, ProductsPage } from "./page";
import { Layouts } from "./components";

const App: FC = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route element={<Layouts />}>
            <Route path={"/"} element={<MainPage />} />
            <Route path={"/basket"} element={<BasketPage />} />
            <Route path={"/products"} element={<ProductsPage />} />
          </Route>
          <Route path={"/login"} element={<AuthPage type="login" />} />
          <Route path={"/register"} element={<AuthPage type="register" />} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
