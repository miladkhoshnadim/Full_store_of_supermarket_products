import HomeStyle from "./PageHome.module.css";
import mainImgPageHome from "./assetsHome/Rectangle 2.png";
import { useContext } from "react";
import { FooterPageHome, SingleCategory } from "../../Component/indexCoponent";
import { contexInfo } from "../../Component/context/Contex";


export const PageHome = () => {
  const Info = useContext(contexInfo)

  return (
    <>
      <div className={HomeStyle.divMain}>
        <div className={HomeStyle.mainPageHome}>
          <div>
            <img
              className={HomeStyle.MainImgPageHome}
              alt=""
              src={mainImgPageHome}
            />
          </div>
          {Info.dataGrops.map((Grop, i) => (
            <SingleCategory key={i} Grop={Grop} />
          ))}

          <FooterPageHome />
        </div>
      </div>
    </>
  );
};
