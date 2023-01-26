import SingleProductStyle from "./SingleProductPage.module.css";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { contexInfo } from "../../Component/context/Contex";

export const SingleProductPage = () => {
  const { ProductId } = useParams();
  const addresOneProduct = ProductId.split("ID");
  const InformationContext = useContext(contexInfo);
  const index = InformationContext.GroupName.findIndex(
    (x) => x === addresOneProduct[0]
  );

  const elem = InformationContext.dataGrops[index].find(
    (el) => el.id == addresOneProduct[1]
  );

  //Grop[0].CategoryFarsi

  return (
    <div className={SingleProductStyle.infinityDivDisplay}>
      {" "}
      <div className={SingleProductStyle.MainDivDisplay}>
        <div className={SingleProductStyle.SubjectPage}>
          <span>
            محصولی از دسته بندی {elem.CategoryFarsi} برند {elem.brand}
          </span>
        </div>
        <div className={SingleProductStyle.MainSingleProductDiv}>
          <div className={SingleProductStyle.ImgSubjectProductDiv}>
            <div className={SingleProductStyle.DivImg}>
              <img className={SingleProductStyle.ImgProduct} src={elem.img} />
            </div>

            <div className={SingleProductStyle.ExplainProductDiv}>
              <span className={SingleProductStyle.LabelProduct}>
                {elem.Lable}
              </span>
              <span className={SingleProductStyle.PriceProduct}>
                {" "}
                {elem.price} ریال{" "}
              </span>
              <div className={SingleProductStyle.CounterDiv}>
                <span>+</span>
                <span className={SingleProductStyle.CounterNumber}>0</span>
                <span className={SingleProductStyle.MinesSpan}>_</span>
              </div>
            </div>
          </div>
          <p className={SingleProductStyle.ExplainProductExactly}>
            {elem.explain}
          </p>
        </div>
      </div>{" "}
    </div>
  );
};
