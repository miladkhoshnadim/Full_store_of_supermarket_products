import { useState } from "react";
import { ServiceProducts } from "../../services/Servise";
import ModalOrderRewstyle from "./ModalOrderRew.module.css";

export const ModalOrderRew = ({ ItemModal, setModalShow }) => {
  const [Delivering, setDelivering] = useState(false);
  const [Delivered, setDelivered] = useState(false);

  function HandelDeliveredOrders() {
    setDelivering(true);
    fetch(ServiceProducts + `/users/${ItemModal.id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "PATCH",
      body: JSON.stringify({
        delivered: "true",
        deliveredAt: `${new Date().toLocaleDateString()}`,
      }),
    }).then(() => {
      setDelivering(false);
      setDelivered(true);
      setTimeout(() => {
        setDelivered(false);
        setModalShow(false);
      }, 5000);
    });
  }

  return (
    <>
      <div
        className={ModalOrderRewstyle.DivScondLayerModal}
        onClick={() => setModalShow(false)}
      ></div>
      <div className={ModalOrderRewstyle.divModalOrderRew}>
        <div className={ModalOrderRewstyle.divModalOrderRewSection}>
          <div className={ModalOrderRewstyle.divHeadModal}>
            نمایش سفارش{" "}
            <span
              className={ModalOrderRewstyle.CloseModal}
              onClick={() => setModalShow(false)}
            >
              x
            </span>
          </div>
          <div className={ModalOrderRewstyle.divInfoModal}>
            {" "}
            <span>نام مشتری:</span>
            {ItemModal.username}-{ItemModal.lastname}
          </div>
          <div className={ModalOrderRewstyle.divInfoModal}>
            <span>آدرس:</span>
            {ItemModal.address}
          </div>
          <div className={ModalOrderRewstyle.divInfoModal}>
            <span>تلفن:</span>
            {ItemModal.phone}
          </div>
          <div className={ModalOrderRewstyle.divInfoModal}>
            <span>زمان درخواست تحویل:</span>
            {ItemModal.expectAt}
          </div>
          <div className={ModalOrderRewstyle.divInfoModal}>
            <span>زمان سفارش:</span>
            {ItemModal.createdAt}
          </div>
          <div className={ModalOrderRewstyle.divFactorModal}>فاکتور خرید</div>
          <div className={ModalOrderRewstyle.TableSection}>
            <div className={ModalOrderRewstyle.DivHeadTableModal}>
              <span className={ModalOrderRewstyle.NameProductModal}>
                نام کالا
              </span>
              <span className={ModalOrderRewstyle.PriceModal}>قیمت (ریال)</span>

              <span className={ModalOrderRewstyle.CounterModal}>تعداد</span>
            </div>
            {ItemModal.products.map((item, i) => (
              <div
                className={
                  i % 2 === 0
                    ? ModalOrderRewstyle.DivRowOddTables
                    : ModalOrderRewstyle.DivRowTables
                }
              >
                <span className={ModalOrderRewstyle.NameProductModal}>
                  {item.name}
                </span>
                <span className={ModalOrderRewstyle.PriceModal}>
                  {item.price}
                </span>
                <span className={ModalOrderRewstyle.CounterModal}>
                  {item.count}
                </span>
              </div>
            ))}
            <div className={ModalOrderRewstyle.DivFooterTable}>
              <span className={ModalOrderRewstyle.SpanTotText}>
                مجموع فاکتور:
              </span>
              <span className={ModalOrderRewstyle.SpanTotPrice}>
                {ItemModal.prices} ریال
              </span>
              {/* <span className={ModalOrderRewstyle.SpanTotCounter}>
                  {TotCounter} قلم کالا
                </span> */}
            </div>
          </div>
          {ItemModal.delivered === "true" ? (
            <div className={ModalOrderRewstyle.divDeliveredDate}>
              <span>زمان تحویل شده:</span>
              {ItemModal.deliveredAt}
            </div>
          ) : (
            <div
              className={ModalOrderRewstyle.ButtenDeliveredModal}
              onClick={HandelDeliveredOrders}
            >
              تحویل شد
            </div>
          )}
          {Delivering && (
            <div className={ModalOrderRewstyle.DeliveringDiv}>
              در حال ثبت تحویل شد...
            </div>
          )}
          {Delivered && (
            <div className={ModalOrderRewstyle.DeliveringDiv}>
              با موفقیت ثبت شد ...
            </div>
          )}
        </div>
      </div>
    </>
  );
};
