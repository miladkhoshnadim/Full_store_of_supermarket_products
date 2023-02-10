import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { contexInfo } from "../context/Contex";
import CardProductStyle from "./CardProduct.module.css";

export const CardProduct = ({ item, group }) => {
  const [counter, SetCounter] = useState(0);
  const Info = useContext(contexInfo);
  let BasketInventory = [...Info.BacketInventory];

  useEffect(() => {
    HandelBasketInventory();
  }, []);

  useEffect(() => {
    ChengeBascketInventory();
  }, [counter]);

  function HandelBasketInventory() {
    // BasketInventory = JSON.parse(localStorage.getItem("BasketBuying"));
    const BasketProductindex = BasketInventory.findIndex(
      (x) => x.id == +item.id
    );
    if (BasketProductindex > -1) {
      SetCounter(BasketInventory[BasketProductindex].count);
    }
  }

  function HandelPlusCounter() {
    if (counter < +item.inventory) SetCounter((prv) => prv + 1);
  }

  function HandelMinesCounter() {
    if (counter > 0) SetCounter((prv) => prv - 1);
  }

  function ChengeBascketInventory() {
    // BasketInventory = JSON.parse(localStorage.getItem("BasketBuying"))
    //   ? JSON.parse(localStorage.getItem("BasketBuying"))
    //   : [];

    const BasketProductindex = BasketInventory.findIndex(
      (x) => x.id == +item.id
    );

    if (BasketProductindex > -1 && counter == 0) {
      BasketInventory.splice(BasketProductindex, 1);
    } else if (BasketProductindex > -1) {
      BasketInventory[BasketProductindex].count = counter;
    } else if (counter > 0) {
      BasketInventory = [
        ...BasketInventory,
        {
          id: `${item.id}`,
          name: `${item.Lable}`,
          count: `${counter}`,
          image: `${item.img}`,
          price: `${item.price}`,
        },
      ];
    }
    Info.setBacketInventory(BasketInventory);
    // localStorage.setItem("BasketBuying", JSON.stringify(BasketInventory));
  }
  return (
    <div className={CardProductStyle.oneProductDiv}>
      <div className={CardProductStyle.DivImgProduct}>
        <Link to={`/SingleProductPage/${item.id}`}>
          <img alt="" className={CardProductStyle.ImgProducts} src={item.img} />
        </Link>
      </div>
      <div className={CardProductStyle.explainProduct}>
        <Link
          className={CardProductStyle.linkStyle}
          to={`/SingleProductPage/${group}ID${item.id}`}
        >
          <div className={CardProductStyle.LableProduct}>{item.Lable}</div>
        </Link>
        <div className={CardProductStyle.explainPriceCount}>
          <span className={CardProductStyle.PriceWith}>{item.price} ریال</span>
          <div className={CardProductStyle.DivCounter}>
            {counter == 0 ? (
              <span
                className={CardProductStyle.SpanCounterPluse}
                onClick={HandelPlusCounter}
              >
                +
              </span>
            ) : (
              <>
                <span
                  className={CardProductStyle.SpanCounterPluses}
                  onClick={HandelPlusCounter}
                >
                  +
                </span>
                <span>{counter}</span>
                <span
                  className={CardProductStyle.SpanCounterMines}
                  onClick={HandelMinesCounter}
                >
                  _
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
