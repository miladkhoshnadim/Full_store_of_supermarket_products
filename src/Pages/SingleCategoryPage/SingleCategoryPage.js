import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { contexInfo } from "../../Component/context/Contex";
import { CardProduct } from "../../Component/indexCoponent";
import SingleCategoryStyle from "./SingleCategoryPage.module.css";

export const SingleCategoryPage = () => {
  const { CategoryId } = useParams();
  const InfoContext = useContext(contexInfo);
  const index = InfoContext.GroupName.findIndex((x) => x === CategoryId);

  return (
    <div className={SingleCategoryStyle.MainSection}>
      <div className={SingleCategoryStyle.MainPageSection}>
        <div className={SingleCategoryStyle.ProductsSection}>
          {InfoContext.dataGrops[index].map((item) => (
            <CardProduct item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
