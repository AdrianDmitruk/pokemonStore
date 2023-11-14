import { FC } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "./page";
import { Layouts } from "./components";

const App: FC = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route element={<Layouts />}>
            <Route path={"/"} element={<MainPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
