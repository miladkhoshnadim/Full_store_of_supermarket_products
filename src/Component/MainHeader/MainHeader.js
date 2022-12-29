import personIcon from "./assets/person1.png";
import HiperKhoshLogo from "./assets/hiperKhoshLogo1.png";
import styleHead from "./mainHeader.module.css";

export const MainHeader = () => {
  return (
    <div className={styleHead.divmainHead}>
      <div className={styleHead.mainHead}>
        <div className={styleHead.divLeftHeader}>
          <img className={styleHead.personImg} src={personIcon} />
          <span className={styleHead.textIncoming}>ثبت نام / مدیریت</span>
        </div>
        <div className={styleHead.divRightHeader}>
          <span className={styleHead.TextLogo}>هایپرمارکت خوش ندیم</span>
          <img className={styleHead.LogoImg} src={HiperKhoshLogo} />
        </div>
      </div>
    </div>
  );
};
