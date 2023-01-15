import personIcon from "./assets/person1.png";
import HiperKhoshLogo from "./assets/hiperKhoshLogo1.png";
import searchIcon from "./assets/search.png";
import styleHead from "./mainHeader.module.css";

export const MainHeader = () => {
  return (
    <div className={styleHead.divmainHead}>
      <div className={styleHead.mainHead}>
        <div className={styleHead.divRightHeader}>
          <img className={styleHead.LogoImg} src={HiperKhoshLogo} />
          <span className={styleHead.TextLogo}>هایپرمارکت خوش ندیم</span>
        </div>

        <div className={styleHead.divLeftHeader}>
          <img className={styleHead.personImg} src={personIcon} />
          <span className={styleHead.textIncoming}>ثبت نام / مدیریت</span>
        </div>
      </div>
      <div className={styleHead.divInputSearch}>
        <input
          className={styleHead.inputSearch}
          placeholder="هر آنچه می خواهید را اینجا جست و جو کنید"
        />
        <img className={styleHead.SearchImg} src={searchIcon} />
      </div>
    </div>
  );
};
