import personIcon from "./assets/person1.png";
import HiperKhoshLogo from "./assets/hiperKhoshLogo1.png";
import searchIcon from "./assets/search.png";
import styleHead from "./mainHeader.module.css";
import { useContext, useState } from "react";
import { contexInfo } from "../context/Contex";
import { Link } from "react-router-dom";
import { NewCustomerModal } from "../indexCoponent";

export const MainHeader = () => {
  const information = useContext(contexInfo);
  const [NewCostomerModal, setNewCostomerModal] = useState(false);
  function HandelSerchInput(e) {
    information.setInputSerch(e.target.value);
    // console.log('!@#', inputtSerch)
  }

  return (
    <>
      {NewCostomerModal && (
        <NewCustomerModal setNewCostomerModal={setNewCostomerModal} />
      )}
      <div className={styleHead.divmainHead}>
        <div className={styleHead.mainHead}>
          <div className={styleHead.divRightHeader}>
            <img className={styleHead.LogoImg} src={HiperKhoshLogo} />
            <span className={styleHead.TextLogo}>هایپرمارکت خوش ندیم</span>
          </div>

          <div className={styleHead.divLeftHeader}>
            <img className={styleHead.personImg} src={personIcon} />
            <span className={styleHead.textIncoming}>
              
                <span className={styleHead.ButtonManagement} onClick={()=>setNewCostomerModal(true)}>ثبت نام </span>{" "}
                <span className={styleHead.ButtonManagement}>
              <Link className="linkStyle" to={`/ManagementLoginPage`}>
                مدیریت{" "}
              </Link></span>
            </span>
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
    </>
  );
};
