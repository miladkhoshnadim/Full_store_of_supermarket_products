import personIcon from "./assets/person1.png";
import HiperKhoshLogo from "./assets/hiperKhoshLogo1.png";
import searchIcon from "./assets/search.png";
import styleHead from "./mainHeader.module.css";
import { useContext, useState } from "react";
import { contexInfo } from "../context/Contex";

export const MainHeader = () => {
  const information = useContext(contexInfo);

  function HandelSerchInput(e) {
    information.setInputSerch(e.target.value);
    // console.log('!@#', inputtSerch)
  }

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
          value={information.inputSerch}
          onChange={(e) => HandelSerchInput(e)}
          className={styleHead.inputSearch}
          placeholder="هر آنچه می خواهید را اینجا جست و جو کنید"
        />
        <img className={styleHead.SearchImg} src={searchIcon} />
      </div>
    </div>
  );
};
