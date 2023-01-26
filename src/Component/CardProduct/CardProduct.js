import { Link } from "react-router-dom";
import CardProductStyle from "./CardProduct.module.css";

export const CardProduct = ({ item ,group }) => {
  // console.log('item.img',item.img )
  return (
    <div className={CardProductStyle.oneProductDiv}>
      <div className={CardProductStyle.DivImgProduct}>
        <Link  to={`/SingleProductPage/${item.id}`}>
          <img alt="" className={CardProductStyle.ImgProducts} src={item.img} />
        </Link>
      </div>
      <div className={CardProductStyle.explainProduct}>
        <Link className={CardProductStyle.linkStyle} to={`/SingleProductPage/${group}ID${item.id}`}>
          <div className={CardProductStyle.LableProduct}>{item.Lable}</div>
        </Link>
        <div className={CardProductStyle.explainPriceCount}>
          <span className={CardProductStyle.PriceWith}>{item.price} ریال</span>
          <span className={CardProductStyle.CounterPluse}>+</span>
        </div>
      </div>
    </div>
  );
};
