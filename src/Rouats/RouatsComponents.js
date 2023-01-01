import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayOut } from "../layOut/LayOut";
import { PageHome, SingleProductPage } from "../Pages/indexPage";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayOut/>}>
          <Route index element={<PageHome />} />
          <Route path="/SingleProductPage" element={<SingleProductPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
