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
  let BasketInventory = [];

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
    HandelBasketInventory();
  }, []);

  useEffect(() => {
    ChengeBascketInventory();
  }, [counter]);

  function HandelBasketInventory() {
    BasketInventory = JSON.parse(localStorage.getItem("BasketBuying"))
      ? JSON.parse(localStorage.getItem("BasketBuying"))
      : [];

    const BasketProductindex = BasketInventory.findIndex(
      (x) => x.id === addresOneProduct[1]
    );
    if (BasketProductindex > -1) {
      setCounter(BasketInventory[BasketProductindex].count);
    }
  }

  function ChengeBascketInventory() {
    BasketInventory = JSON.parse(localStorage.getItem("BasketBuying"))
      ? JSON.parse(localStorage.getItem("BasketBuying"))
      : [];

    const BasketProductindex = BasketInventory.findIndex(
      (x) => x.id === addresOneProduct[1]
    );
    if (BasketProductindex > -1 && counter == 0) {
      BasketInventory = BasketInventory.splice(BasketProductindex, 1);
    } else if (BasketProductindex > -1) {
      BasketInventory[BasketProductindex].count = counter;
    } else if (counter > 0){
      BasketInventory = [
        ...BasketInventory,
        {
          id: `${Product.id}`,
          name: `${Product.Lable}`,
          count: `${counter}`,
          image: `${Product.img}`,
          price: `${Product.price}`,
        },
      ];
    }
    console.log("BasketInventory", BasketInventory);
    // localStorage.setItem("BasketBuying", JSON.stringify());
  }

  function HandelPlusCounter() {
    if (counter < +Product.inventory) setCounter((prv) => prv + 1);
  }

  function HandelMinesCounter() {
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
                    alt=""
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
                      <span
                        onClick={HandelPlusCounter}
                        className={SingleProductStyle.PlusSpan}
                      >
                        +
                      </span>
                      <span className={SingleProductStyle.CounterNumber}>
                        {counter}
                      </span>
                      <span
                        className={SingleProductStyle.MinesSpan}
                        onClick={HandelMinesCounter}
                      >
                        _
                      </span>
                    </div>
                    {counter - Product.inventory === 0 ? (
                      <span>عدم موجودی!</span>
                    ) : (
                      <span>موجودی {Product.inventory - counter} عدد</span>
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
