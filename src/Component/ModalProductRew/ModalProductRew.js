import { useState } from "react";
import { ServiceProducts } from "../../services/Servise";
import ModalProductRewstyle from "./ModalProductRew.module.css";

export const ModalProductRew = ({ EditProduct, setShowModal }) => {
  const [inputsValue, setInputsValue] = useState(EditProduct);
  const [ShowErrors, setShowErrors] = useState([true, false, false, false]);

  function HandelChengeInputs(e) {
    setInputsValue((prv) => ({ ...prv, [e.target.name]: e.target.value }));
  }
  // console.log('EditProduct',EditProduct )

  function HondelEnterProduct() {
    // setShowModal(false)
    if (
      !inputsValue.group ||
      !inputsValue.img ||
      !inputsValue.brand ||
      !inputsValue.Lable ||
      !inputsValue.CategoryFarsi ||
      !inputsValue.price ||
      !inputsValue.explain
    ) {
      setShowErrors([true, true, false, false]);
      setTimeout(() => {
        setShowErrors([true, false, false, false]);
      }, 4000);
    } else if (
      inputsValue.img.length > 3 &&
      inputsValue.group.length > 3 &&
      inputsValue.brand.length > 3 &&
      inputsValue.Lable.length > 3 &&
      inputsValue.CategoryFarsi.length > 3 &&
      inputsValue.price.length > 3 &&
      inputsValue.explain.length > 3
    ) {
      if (EditProduct.id) {
        // console.log("EditProduct", EditProduct);
        setShowErrors([false, false, false, true]);
        fetch(ServiceProducts + `/Products/${EditProduct.id}`, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "PATCH",
          body: JSON.stringify({
            CategoryFarsi: `${inputsValue.CategoryFarsi}`,
            group: `${inputsValue.group}`,
            brand: `${inputsValue.brand}`,
            inventory: `${inputsValue.inventory}`,
            Lable: `${inputsValue.Lable}`,
            img: `${inputsValue.img}`,
            price: `${inputsValue.price}`,
            explain: `${inputsValue.explain}`,
          }),
        }).then(() => {
          setShowErrors([false, false, true, false]);
          setTimeout(() => {
            setShowErrors([false, false, false, false]);
            setShowModal(false);
          }, 4000);
        });
      } else {
        setShowErrors([false, false, false, true]);
        // console.log("CreatProduct");
        fetch(ServiceProducts + `/Products`, {
          method: "POST",
          body: JSON.stringify({
            CategoryFarsi: `${inputsValue.CategoryFarsi}`,
            group: `${inputsValue.group}`,
            brand: `${inputsValue.brand}`,
            inventory: `${inputsValue.inventory}`,
            Lable: `${inputsValue.Lable}`,
            img: `${inputsValue.img}`,
            price: `${inputsValue.price}`,
            explain: `${inputsValue.explain}`,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }).then(() => {
          setShowErrors([false, false, true, false]);
          setTimeout(() => {
            setShowErrors([false, false, false, false]);
            setShowModal(false);
          }, 4000);
        });
      }
    } else {
      setShowErrors([true, true, false, false]);
      setTimeout(() => {
        setShowErrors([true, false, false, false]);
      }, 4000);
    }
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
                placeholder="dairy, Grocery, Cleaner, celolozy, beans"
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
                placeholder="0"
                type="number"
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
                placeholder="لبنیات، خواروبار، ضدعفونی کننده، سلولزی و بهداشتی"
                className={ModalProductRewstyle.inputsModal}
                value={inputsValue.CategoryFarsi}
                name="CategoryFarsi"
                onChange={(e) => HandelChengeInputs(e)}
              />
              <label>قیمت (ریال) :</label>
              <input
                type="number"
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
          {ShowErrors[0] && (
            <div
              className={ModalProductRewstyle.ButtenDeliveredModal}
              onClick={HondelEnterProduct}
            >
              ذخیره
            </div>
          )}
          {ShowErrors[1] && (
            <div className={ModalProductRewstyle.TextErrrorInputs}>
              هیچیک از محتوای آیتم ها نباید از سه کاراکتر کمتر باشد...
            </div>
          )}
          {ShowErrors[2] && (
            <div className={ModalProductRewstyle.TextSucsefullEnter}>
              کالای جدید یا تغییرات با موفقیت ثبت شد ...
            </div>
          )}
          {ShowErrors[3] && (
            <div className={ModalProductRewstyle.TextSucsefullEnter}>
              در حال اضافه کردن کالای جدید یا ویرایش اطلاعات ...
            </div>
          )}
        </div>
      </div>
    </>
  );
};
