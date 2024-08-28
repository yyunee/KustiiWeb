import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./page/MainPage";
import ActivityPage from "./page/ActivityPage";
import CooperPage from "./page/CooperPage";
import InfoPage from "./page/InfoPage";
import NoticePage from "./page/NoticePage";
import { MAIN_PATH } from "./common/constants/path.const";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path={MAIN_PATH.INFO} element={<InfoPage />} />
        <Route path={MAIN_PATH.NOTICE} element={<NoticePage />} />
        <Route path={MAIN_PATH.ACT} element={<ActivityPage />} />
        <Route path={MAIN_PATH.COOPER} element={<CooperPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
