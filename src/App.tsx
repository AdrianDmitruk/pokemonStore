import { FC } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { BasketPage, MainPage } from "./page";
import { Layouts } from "./components";

const App: FC = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route element={<Layouts />}>
            <Route path={"/"} element={<MainPage />} />
            <Route path={"/basket"} element={<BasketPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
