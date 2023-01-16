import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayOut } from "../layOut/LayOut";
import {
  PageHome,
  SingleCategoryPage,
  SingleProductPage,
} from "../Pages/indexPage";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayOut />}>
          <Route index element={<PageHome />} />
          <Route path="/SingleCategoryPage" element={<SingleCategoryPage />}>
            <Route path=":CategoryId" element={<SingleCategoryPage />} />
          </Route>
          <Route path="/SingleProductPage" element={<SingleProductPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
