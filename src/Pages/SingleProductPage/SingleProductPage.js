import SingleProductStyle from "./SingleProductPage.module.css";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { contexInfo } from "../../Component/context/Contex";
import { ServiceProducts } from "../../services/Servise";

export const SingleProductPage = () => {
  const [Product, setProduct] = useState({});
  const [counter, setCounter] = useState(0);
  const { ProductId } = useParams();
  const addresOneProduct = ProductId.split("ID");
  const InformationContext = useContext(contexInfo);
  const index = InformationContext.GroupName.findIndex(
    (x) => x === addresOneProduct[0]
  );

  useEffect(() => {
    if (index > -1) {
      const Productt = InformationContext.dataGrops[index].find(
        (el) => el.id == addresOneProduct[1]
      );
      setProduct(Productt);
    } else {
      fetch(ServiceProducts + `/Products/${addresOneProduct[1]}`)
        .then((res) => res.json())
        .then((result) => setProduct(result));
    }
  }, []);

  function HandelPlusCounter() {
    if (counter < +Product.inventory) setCounter((prv) => prv + 1);
  }

  function HandelMinesCounter(){
    if (counter > 0) setCounter((prv) => prv - 1);
  }

  return (
    <div className={SingleProductStyle.infinityDivDisplay}>
      {" "}
      <div className={SingleProductStyle.MainDivDisplay}>
        {Product.id > -1 ? (
          <>
            <div className={SingleProductStyle.SubjectPage}>
              <span>
                محصولی از دسته بندی {Product.CategoryFarsi} برند {Product.brand}
              </span>
            </div>
            <div className={SingleProductStyle.MainSingleProductDiv}>
              <div className={SingleProductStyle.ImgSubjectProductDiv}>
                <div className={SingleProductStyle.DivImg}>
                  <img
                    className={SingleProductStyle.ImgProduct}
                    src={Product.img}
                  />
                </div>

                <div className={SingleProductStyle.ExplainProductDiv}>
                  <span className={SingleProductStyle.LabelProduct}>
                    {Product.Lable}
                  </span>
                  <span className={SingleProductStyle.PriceProduct}>
                    {" "}
                    {Product.price} ریال{" "}
                  </span>
                  <div className={SingleProductStyle.DivInventoryPrice}>
                    <div className={SingleProductStyle.CounterDiv}>
                      <span onClick={HandelPlusCounter}>+</span>
                      <span className={SingleProductStyle.CounterNumber}>
                        {counter}
                      </span>
                      <span className={SingleProductStyle.MinesSpan} onClick={HandelMinesCounter}>_</span>
                    </div>
                    {counter - Product.inventory == 0 ? (
                      <span>عدم موجودی!</span>
                    ) : (
                      <span>موجودی {Product.inventory-counter} عدد</span>
                    )}
                  </div>
                </div>
              </div>
              <p className={SingleProductStyle.ExplainProductExactly}>
                {Product.explain}
              </p>
            </div>
          </>
        ) : (
          <div>در حال بارگذاری...</div>
        )}
      </div>{" "}
    </div>
  );
};
