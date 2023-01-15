import  CardProductStyle  from "./CardProduct.module.css";

export const CardProduct = ({ item }) => {
  return (
    <div className={CardProductStyle.oneProductDiv}>
      <div className={CardProductStyle.DivImgProduct} >
        <img alt="" className={CardProductStyle.ImgProducts} src={item.img} />
      </div>
      <div className={CardProductStyle.explainProduct}>
        <div>{item.Lable}</div>
        <div className={CardProductStyle.explainPriceCount}>
          <span className={CardProductStyle.PriceWith}>{item.price} ریال</span>
          <span className={CardProductStyle.CounterPluse}>+</span>
        </div>
      </div>
    </div>
  );
};
