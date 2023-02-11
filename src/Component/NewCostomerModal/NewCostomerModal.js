import { useState } from "react";

import NewCustomerModalstyle from "./NewCostomerModal.module.css";

export const NewCustomerModal = ({ setNewCostomerModal }) => {
  const [ShowErrors, setShowErrors] = useState(false);
  const [NewCostomerInfo, setNewCostomerInfo] = useState(
    JSON.parse(localStorage.getItem("CostomerInfo")) || {}
  );

  function HandelChengeInputs(e) {
    setNewCostomerInfo((prv) => ({ ...prv, [e.target.name]: e.target.value }));
  }

  function HondelEnterInfoCustomer() {
    localStorage.setItem("CostomerInfo", JSON.stringify(NewCostomerInfo));
    setShowErrors(true);
    setTimeout(() => {
      setShowErrors(false);
      setNewCostomerModal(false);
    }, 4000);
    // if (
    //   !inputsValue.username ||
    //   !inputsValue.expectAt ||
    //   !inputsValue.address ||
    //   !inputsValue.lastname ||
    //   !inputsValue.phone
    // ) {
    //   setShowErrors([true, false, false, true]);
    //   setTimeout(() => {
    //     setShowErrors([false, false, false, true]);
    //   }, 4000);
    // } else if (
    //   inputsValue.username.length > 2 &&
    //   inputsValue.expectAt.length > 2 &&
    //   inputsValue.address.length > 2 &&
    //   inputsValue.lastname.length > 2 &&
    //   inputsValue.phone.length > 2
    // ) {
    //   setShowErrors([false, true, false, false]);
    //   setTimeout(() => {
    //     setShowErrors([false, false, false, false]);
    //     setShowModal(false);
    //     localStorage.setItem("CostomerInfo", JSON.stringify(inputsValue));
    //     navigat("/PaymentMassagePage");
    //   }, 4000);
    // } else {
    //   setShowErrors([true, false, false, true]);
    //   setTimeout(() => {
    //     setShowErrors([false, false, false, true]);
    //   }, 4000);
    // }
  }

  return (
    <>
      <div
        className={NewCustomerModalstyle.DivScondLayerModal}
        onClick={() => setNewCostomerModal(false)}
      ></div>
      <div className={NewCustomerModalstyle.divModalOrderRew}>
        <div className={NewCustomerModalstyle.divModalOrderRewSection}>
          <div className={NewCustomerModalstyle.divHeadModal}>
            نهایی کردن اطلاعات خرید
            <span
              className={NewCustomerModalstyle.CloseModal}
              onClick={() => setNewCostomerModal(false)}
            >
              x
            </span>
          </div>

          <div className={NewCustomerModalstyle.divInputs}>
            <div className={NewCustomerModalstyle.divInputsLeft}>
              <label>
                نام:
                <input
                  className={NewCustomerModalstyle.inputsModal}
                  value={NewCostomerInfo.username}
                  name="username"
                  onChange={(e) => HandelChengeInputs(e)}
                />
              </label>

              <label>
                تاریخ تحویل:
                <input
                  type="date"
                  className={NewCustomerModalstyle.inputsModal}
                  value={NewCostomerInfo.expectAt}
                  name="expectAt"
                  onChange={(e) => HandelChengeInputs(e)}
                />
              </label>

              <label>
                آدرس تحویل:
                <textarea
                  className={NewCustomerModalstyle.inputsModal}
                  value={NewCostomerInfo.address}
                  name="address"
                  onChange={(e) => HandelChengeInputs(e)}
                />
              </label>
            </div>
            <div className={NewCustomerModalstyle.divInputsLeft}>
              <label>
                نام خانوادگی:
                <input
                  className={NewCustomerModalstyle.inputsModal}
                  value={NewCostomerInfo.lastname}
                  name="lastname"
                  onChange={(e) => HandelChengeInputs(e)}
                />
              </label>
              <label>
                شماره تماس:
                <input
                  type="number"
                  className={NewCustomerModalstyle.inputsModal}
                  value={NewCostomerInfo.phone}
                  name="phone"
                  onChange={(e) => HandelChengeInputs(e)}
                />
              </label>

              <label>
                سایر توضیحات:
                <textarea
                  className={NewCustomerModalstyle.inputsModal}
                  value={NewCostomerInfo.Explain}
                  name="Explain"
                  onChange={(e) => HandelChengeInputs(e)}
                />
              </label>
            </div>
          </div>

          {!ShowErrors && (
            <div
              className={NewCustomerModalstyle.ButtenDeliveredModal}
              onClick={HondelEnterInfoCustomer}
            >
              ثبت موقت اطلاعات
            </div>
          )}

          {/* {ShowErrors[0] && (
            <div className={InfoCustomerModalstyle.TextErrrorInputs}>
              هیچیک از محتوای آیتم ها نباید از دو کاراکتر کمتر باشد...
            </div>
          )} */}
          {ShowErrors && (
            <div className={NewCustomerModalstyle.TextSucsefullEnter}>
              در حال ثبت موقت اطلاعات ...
            </div>
          )}
          {/* {ShowErrors[2] && (
            <div className={InfoCustomerModalstyle.TextSucsefullEnter}>
              سفارش با موفقیت ثبت شد در حال انتقال به صفحه پرداخت ...
            </div>
          )} */}
        </div>
      </div>
    </>
  );
};
