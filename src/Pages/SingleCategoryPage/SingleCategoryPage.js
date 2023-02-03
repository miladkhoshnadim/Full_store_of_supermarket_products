import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { contexInfo } from "../../Component/context/Contex";
import { CardProduct } from "../../Component/indexCoponent";
import SingleCategoryStyle from "./SingleCategoryPage.module.css";

export const SingleCategoryPage = () => {
  const { CategoryId } = useParams();
  const InfoContext = useContext(contexInfo);
  const index = InfoContext.GroupName.findIndex((x) => x === CategoryId);
  const [Brands, setBrands] = useState([]);
  let newBrands = [];
  const [dataCategory, setDataCategory] = useState(
    InfoContext.dataGrops[index]
  );

  useEffect(() => {
    InfoContext.dataGrops[index].forEach((element) => {
      const indexBrands = newBrands.findIndex((x) => x === element.brand);
      console.log("indexBrands", indexBrands);
      if (indexBrands === -1) {
        newBrands.push(element.brand);
      }
    });
    setBrands(newBrands);
    setDataCategory(InfoContext.dataGrops[index])
  }, [CategoryId]);

  useEffect(() => {
    const newSearchData = InfoContext.dataGrops[index].filter((item) => {
      return (
        item.Lable.toLowerCase().includes(
          InfoContext.inputSerch.toLowerCase()
        ) || item.price.includes(InfoContext.inputSerch.toLowerCase())
      );
    });
    setDataCategory(newSearchData);
  }, [InfoContext.inputSerch]);

  function HondelFilterFunction(e) {
    if (e.target.value === "all") {
      setDataCategory(InfoContext.dataGrops[index]);
    } else {
      const newFilterData = InfoContext.dataGrops[index].filter((item) => {
        return item.brand.toLowerCase().includes(e.target.value);
      });
      setDataCategory(newFilterData);
    }
  }

  function HandelPriceSorting(e) {
    if (e.target.value === "expensiv") {
      const numAscending = [...dataCategory].sort((a, b) => b.price - a.price);
      setDataCategory(numAscending);
    } else if (e.target.value === "cheap") {
      const numAscending = [...dataCategory].sort((a, b) => a.price - b.price);
      setDataCategory(numAscending);
    } else if (e.target.value === "allPrice") {
      setDataCategory(InfoContext.dataGrops[index]);
    }
  }

  return (
    <div className={SingleCategoryStyle.MainSection}>
      <div className={SingleCategoryStyle.MainPageSection}>
        <div className={SingleCategoryStyle.LableSortingsDiv}>
          <span className={SingleCategoryStyle.subjectCategory}>
            دسته بندی گروه {InfoContext.dataGrops[index][0].CategoryFarsi}
          </span>
          <div className={SingleCategoryStyle.SelectSortingDiv}>
            <select
              className={SingleCategoryStyle.SelectSorting}
              onChange={(e) => HondelFilterFunction(e)}
            >
              <option value="all">همه برندها</option>
              {Brands.map((item) => (
                <option value={item}>{item}</option>
              ))}
            </select>

            <select
              className={SingleCategoryStyle.SelectSorting}
              onChange={(e) => HandelPriceSorting(e)}
            >
              <option value="allPrice">ترتیب قیمت</option>
              <option value="expensiv">گرانترین</option>
              <option value="cheap">ارزان ترین</option>
            </select>
          </div>{" "}
        </div>
        <div className={SingleCategoryStyle.ProductsSection}>
          {dataCategory.map((item, i) => (
            <CardProduct key={i} item={item} group={item.group} />
          ))}
        </div>
      </div>
    </div>
  );
};
