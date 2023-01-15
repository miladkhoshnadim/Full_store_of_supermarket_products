import StyleFooter from "./MainFooter.module.css";
import basketImg from "./assetsfooter/basket.png";
import SqureImg from "./assetsfooter/squre.png";
import HomeImg from "./assetsfooter/HomeIcon.png";

export const MainFooter = () => {
  return (
    <div className={StyleFooter.divMainFooter}>
      <div className={StyleFooter.MainFooter}>
        <div className={StyleFooter.iconsMain}>
          <img className={StyleFooter.IconsImg} src={basketImg} />
          <span className={StyleFooter.textIcon}>سبد خرید</span>
        </div>
        <div className={StyleFooter.iconsMain}>
          <img className={StyleFooter.IconsImg} src={SqureImg} />
          <span className={StyleFooter.textIcon}>دسته بندی</span>
        </div>
        <div className={StyleFooter.iconsMain}>
          <img className={StyleFooter.IconsImg} src={HomeImg} />
          <span className={StyleFooter.textIcon}>خانه</span>
        </div>
      </div>
    </div>
  );
};
