import StyleFooter from "./MainFooter.module.css";
import basketImg from "./assetsfooter/basket.png";
import SqureImg from "./assetsfooter/squre.png";
import HomeImg from "./assetsfooter/HomeIcon.png";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { contexInfo } from "../context/Contex";

export const MainFooter = () => {
  const [ShoCategorys, setShoCategorys] = useState(false);

  const Info = useContext(contexInfo);

  // useEffect(() => {
  //   handelBascketNumber();
  // }, []);

  // function handelBascketNumber() {
  //   // JSON.parse(localStorage.getItem("BasketBuying")) || []
  // }

  return (
    <>
      {ShoCategorys && (
        <div className={StyleFooter.divModalFooterCategorys}>
          <div className={StyleFooter.ModalFooterCategorys}>
            {Info.dataGrops.map((Grop, i) => (
              <Link
                className="linkStyle"
                to={`/SingleCategoryPage/${Grop[0].group}`}
              >
                <div
                  key={i}
                  className={StyleFooter.MFSingleCategorys}
                  onClick={() => setShoCategorys(false)}
                >
                  {Grop[0].CategoryFarsi}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
      <div className={StyleFooter.divMainFooter}>
        <div className={StyleFooter.MainFooter}>
          <div className={StyleFooter.iconsMain}>
            <Link className="linkStyle" to={`/BascketBuyPage`}>
              <img className={StyleFooter.IconsImg} src={basketImg} />
            </Link>
            <Link className="linkStyle" to={`/BascketBuyPage`}>
              <span className={StyleFooter.textIcon}>سبد خرید</span>
              {Info.BacketInventory.length > 0 && (
                <span className={StyleFooter.NotificationBasket}>
                  {Info.BacketInventory.length}
                </span>
              )}
            </Link>
          </div>
          <div
            className={StyleFooter.iconsMain}
            onClick={() => setShoCategorys((prv) => (prv ? false : true))}
          >
            <img className={StyleFooter.IconsImg} src={SqureImg} />
            <span className={StyleFooter.textIcon}>دسته بندی</span>
          </div>
          <div className={StyleFooter.iconsMain}>
            <Link className="linkStyle" to={`/`}>
              <img className={StyleFooter.IconsImg} src={HomeImg} />
            </Link>
            <Link className="linkStyle" to={`/`}>
              <span className={StyleFooter.textIcon}>خانه</span>
            </Link>
          </div>
        </div>
      </div>
      
    </>
  );
};
