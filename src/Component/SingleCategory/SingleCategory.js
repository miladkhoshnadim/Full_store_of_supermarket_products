import { CardProduct } from "../indexCoponent";
import SingleCategoryStyle from "./SingleCategory.module.css";
import lessthan from "../assetsComponents/icons8-less-than-30.png";
import moreThan from "../assetsComponents/icons8-more-than-30.png";
import { useContext, useEffect, useRef, useState } from "react";
import { contexInfo } from "../context/Contex";
import { Link } from "react-router-dom";

export const SingleCategory = ({ Grop }) => {
  const dairyRef = useRef(null);
  const [arrowDisable, setArrowDisable] = useState(true);
  const information = useContext(contexInfo);
  const [filterData, setfilterData] = useState(Grop);
  const handleHorizantalScroll = (element, speed, distance, step) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
      if (element.scrollLeft === 0) {
        setArrowDisable(true);
      } else {
        setArrowDisable(false);
      }
    }, speed);
  };

  useEffect(() => {
    const newFilterData = Grop.filter((item) => {
      return (
        item.Lable.toLowerCase().includes(
          information.inputSerch.toLowerCase()
        ) ||
        item.price.toLowerCase().includes(information.inputSerch.toLowerCase())
      );
    });
    setfilterData(newFilterData);
  }, [information.inputSerch]);

  return (
    <div className={SingleCategoryStyle.divOneGroup}>
      <div className={SingleCategoryStyle.subjectGroup}>
        <Link to={`/SingleCategoryPage/${Grop[0].group}`}>
          دسته بندی گروه {Grop[0].CategoryFarsi}
        </Link>
      </div>
      <div className={SingleCategoryStyle.WithScorollDiv}>
        <span
          className={SingleCategoryStyle.ClickScuroll}
          onClick={() => {
            handleHorizantalScroll(dairyRef.current, 15, 232, 10);
          }}
          disabled={arrowDisable}
        >
          <img
            className={SingleCategoryStyle.moreThanImg}
            alt=""
            src={moreThan}
          />
        </span>
        <div className={SingleCategoryStyle.OneGroupSection} ref={dairyRef}>
          {filterData.map((item, i) => (
            <CardProduct key={i} item={item} group={Grop[0].group} />
          ))}
        </div>
        <span
          className={SingleCategoryStyle.ClickScuroll}
          onClick={() => {
            handleHorizantalScroll(dairyRef.current, 15, 232, -10);
          }}
        >
          {" "}
          <img
            className={SingleCategoryStyle.moreThanImg}
            alt=""
            src={lessthan}
          />{" "}
        </span>
      </div>
    </div>
  );
};
