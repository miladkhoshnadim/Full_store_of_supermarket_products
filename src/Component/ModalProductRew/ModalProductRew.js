import { useState } from "react";
import ModalProductRewstyle from "./ModalProductRew.module.css";

export const ModalProductRew = ({ EditProduct, setShowModal }) => {
  const [inputsValue, setInputsValue] = useState(EditProduct);

  function HandelChengeInputs(e) {
    setInputsValue((prv) => ({ ...prv, [e.target.name]: e.target.value }));
  }

  return (
    <>
      <div
        className={ModalProductRewstyle.DivScondLayerModal}
        onClick={() => setShowModal(false)}
      ></div>
      <div className={ModalProductRewstyle.divModalOrderRew}>
        <div className={ModalProductRewstyle.divModalOrderRewSection}>
          <div className={ModalProductRewstyle.divHeadModal}>
            نمایش سفارش{" "}
            <span
              className={ModalProductRewstyle.CloseModal}
              onClick={() => setShowModal(false)}
            >
              x
            </span>
          </div>
          <div className={ModalProductRewstyle.divInputs}>
            <div className={ModalProductRewstyle.divInputsLeft}>
              <label>آدرس تصویر:</label>
              <input
                className={ModalProductRewstyle.inputsModal}
                value={inputsValue.img}
                name="img"
                onChange={(e) => HandelChengeInputs(e)}
              />
              <label>نام گروه به لاتین:</label>
              <input
                className={ModalProductRewstyle.inputsModal}
                value={inputsValue.group}
                name="group"
                onChange={(e) => HandelChengeInputs(e)}
              />
              <label>نام برند:</label>
              <input
                className={ModalProductRewstyle.inputsModal}
                value={inputsValue.brand}
                name="brand"
                onChange={(e) => HandelChengeInputs(e)}
              />
              <label>تعداد موجودی :</label>
              <input
                className={ModalProductRewstyle.inputsModal}
                value={inputsValue.inventory}
                name="inventory"
                onChange={(e) => HandelChengeInputs(e)}
              />
            </div>

            <div className={ModalProductRewstyle.divInputsLeft}>
              <label>نام کالا:</label>
              <input
                className={ModalProductRewstyle.inputsModal}
                value={inputsValue.Lable}
                name="Lable"
                onChange={(e) => HandelChengeInputs(e)}
              />
              <label>نام گروه:</label>
              <input
                className={ModalProductRewstyle.inputsModal}
                value={inputsValue.CategoryFarsi}
                name="CategoryFarsi"
                onChange={(e) => HandelChengeInputs(e)}
              />
              <label>قیمت :</label>
              <input
                className={ModalProductRewstyle.inputsModal}
                value={inputsValue.price}
                name="price"
                onChange={(e) => HandelChengeInputs(e)}
              />
              <label>توصیف محصول :</label>
              <input
                className={ModalProductRewstyle.inputsModal}
                value={inputsValue.explain}
                name="explain"
                onChange={(e) => HandelChengeInputs(e)}
              />
            </div>
          </div>
          <div
            className={ModalProductRewstyle.ButtenDeliveredModal}
            onClick={() => setShowModal(false)}
          >
            ذخیره
          </div>
        </div>
      </div>
    </>
  );
};
