import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { ServiceProducts } from "../../services/Servise";
import InfoCustomerModalstyle from "./InfoCostomerModal.module.css";

export const InfoCustomerModal = ({
  setShowModal,
  inputsValue,
  setInputsValue,
}) => {
  const [ShowErrors, setShowErrors] = useState([false, false, false, true]);

  const navigat = useNavigate();

  function HandelChengeInputs(e) {
    setInputsValue((prv) => ({ ...prv, [e.target.name]: e.target.value }));
  }

  function HondelEnterInfoCustomer() {
    if (
      !inputsValue.username ||
      !inputsValue.expectAt ||
      !inputsValue.address ||
      !inputsValue.lastname ||
      !inputsValue.phone
    ) {
      setShowErrors([true, false, false, true]);
      setTimeout(() => {
        setShowErrors([false, false, false, true]);
      }, 4000);
    } else if (
      inputsValue.username.length > 2 &&
      inputsValue.expectAt.length > 2 &&
      inputsValue.address.length > 2 &&
      inputsValue.lastname.length > 2 &&
      inputsValue.phone.length > 2
    ) {
      setShowErrors([false, true, false, false]);
      setTimeout(() => {
        setShowErrors([false, false, false, false]);
        setShowModal(false);
        localStorage.setItem("CostomerInfo", JSON.stringify(inputsValue));
        navigat("/PaymentMassagePage");
      }, 4000);
    } else {
      setShowErrors([true, false, false, true]);
      setTimeout(() => {
        setShowErrors([false, false, false, true]);
      }, 4000);
    }
  }

  return (
    <>
      <div
        className={InfoCustomerModalstyle.DivScondLayerModal}
        onClick={() => setShowModal(false)}
      ></div>
      <div className={InfoCustomerModalstyle.divModalOrderRew}>
        <div className={InfoCustomerModalstyle.divModalOrderRewSection}>
          <div className={InfoCustomerModalstyle.divHeadModal}>
            نهایی کردن اطلاعات خرید
            <span
              className={InfoCustomerModalstyle.CloseModal}
              onClick={() => setShowModal(false)}
            >
              x
            </span>
          </div>

          <div className={InfoCustomerModalstyle.divInputs}>
            <div className={InfoCustomerModalstyle.divInputsLeft}>
              <label>
                نام:
                <input
                  className={InfoCustomerModalstyle.inputsModal}
                  value={inputsValue.username}
                  name="username"
                  onChange={(e) => HandelChengeInputs(e)}
                />
              </label>

              <label>
                تاریخ تحویل:
                <input
                  type="date"
                  className={InfoCustomerModalstyle.inputsModal}
                  value={inputsValue.expectAt}
                  name="expectAt"
                  onChange={(e) => HandelChengeInputs(e)}
                />
              </label>

              <label>
                آدرس تحویل:
                <textarea
                  className={InfoCustomerModalstyle.inputsModal}
                  value={inputsValue.address}
                  name="address"
                  onChange={(e) => HandelChengeInputs(e)}
                />
              </label>
            </div>
            <div className={InfoCustomerModalstyle.divInputsLeft}>
              <label>
                نام خانوادگی:
                <input
                  className={InfoCustomerModalstyle.inputsModal}
                  value={inputsValue.lastname}
                  name="lastname"
                  onChange={(e) => HandelChengeInputs(e)}
                />
              </label>
              <label>
                شماره تماس:
                <input
                  type="number"
                  className={InfoCustomerModalstyle.inputsModal}
                  value={inputsValue.phone}
                  name="phone"
                  onChange={(e) => HandelChengeInputs(e)}
                />
              </label>

              <label>
                سایر توضیحات:
                <textarea
                  className={InfoCustomerModalstyle.inputsModal}
                  value={inputsValue.Explain}
                  name="Explain"
                  onChange={(e) => HandelChengeInputs(e)}
                />
              </label>
            </div>
          </div>

          {ShowErrors[3] && (
            <div
              className={InfoCustomerModalstyle.ButtenDeliveredModal}
              onClick={HondelEnterInfoCustomer}
            >
              ثبت اطلاعات و ورود به صفحه پرداخت
            </div>
          )}

          {ShowErrors[0] && (
            <div className={InfoCustomerModalstyle.TextErrrorInputs}>
              هیچیک از محتوای آیتم ها نباید از دو کاراکتر کمتر باشد...
            </div>
          )}
          {ShowErrors[1] && (
            <div className={InfoCustomerModalstyle.TextSucsefullEnter}>
              در حال ثبت اطلاعات ...
            </div>
          )}
          {ShowErrors[2] && (
            <div className={InfoCustomerModalstyle.TextSucsefullEnter}>
              سفارش با موفقیت ثبت شد در حال انتقال به صفحه پرداخت ...
            </div>
          )}
        </div>
      </div>
    </>
  );
};
