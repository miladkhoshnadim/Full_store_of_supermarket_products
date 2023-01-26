import ProductManagementStyle from "./ProductManagementPage.module.css";
import HiperKhoshLogo from "../../Component/MainHeader/assets/hiperKhoshLogo1.png";
import Homeimg from "../../Component/MainFoter/assetsfooter/HomeIcon.png";
import { useEffect, useState } from "react";
import {
  ProductManageOrdersSection,
  ProductManagePriceSection,
  ProductManageSection,
} from "../../Component/indexCoponent";

export const ProductManagementPage = () => {
  const [treeSection, setTreeSection] = useState([false, false, true]);
  useEffect(() => {
    // localStorage.removeItem("userManagement");
  }, []);

  return (
    <div className={ProductManagementStyle.divMainManagePage}>
      <div className={ProductManagementStyle.mainPagemanage}>
        <div className={ProductManagementStyle.divHeaderManagePage}>
          <div className={ProductManagementStyle.divRightHeadManagement}>
            <img
              className={ProductManagementStyle.LogoImgManagement}
              src={HiperKhoshLogo}
            />
            <span className={ProductManagementStyle.TextManagment}>
              پنل مدیریت هایپرمارکت خوش ندیم
            </span>
          </div>

          <div className={ProductManagementStyle.divLeftHeadManagment}>
            <img className={ProductManagementStyle.HomeImg} src={Homeimg} />
            <span className={ProductManagementStyle.textIncoming}>
              بازگشت به سایت
            </span>
          </div>
        </div>

        <div className={ProductManagementStyle.divCategoryManagement}>
          <span
            className={
              treeSection[0]
                ? ProductManagementStyle.itemCategoryManageActive
                : ProductManagementStyle.itemCategoryManage
            }
            onClick={() => setTreeSection([true, false, false])}
          >
            کالاها
          </span>
          <span
            className={
              treeSection[1]
                ? ProductManagementStyle.itemCategoryManageActive
                : ProductManagementStyle.itemCategoryManage
            }
            onClick={() => setTreeSection([false, true, false])}
          >
            موجودی و قیمت ها
          </span>
          <span
            className={
              treeSection[2]
                ? ProductManagementStyle.itemCategoryManageActive
                : ProductManagementStyle.itemCategoryManage
            }
            onClick={() => setTreeSection([false, false, true])}
          >
            سفارش ها
          </span>
        </div>

        <div className={ProductManagementStyle.divMainManagement}>
          {treeSection[0] && <ProductManageSection />}
          {treeSection[1] && <ProductManagePriceSection />}
          {treeSection[2] && <ProductManageOrdersSection />}
        </div>
      </div>
    </div>
  );
};
