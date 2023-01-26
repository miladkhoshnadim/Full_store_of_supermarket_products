import { useState } from "react";
import ProductManageOrdersstyle from "./ProductManageOrders.module.css";
import { ModalOrderRew, parseLinkHeader } from "../indexCoponent";

export const ProductManageOrdersSection = () => {
  const [OrderDelivery, setOrderDelivery] = useState(false);

  return (
    <>
      <div className={ProductManageOrdersstyle.divSubjectSection}>
        <span className={ProductManageOrdersstyle.textManageOrder}>
          مدیریت سفارش ها
        </span>
        <div>
          <span
            onClick={() => setOrderDelivery(true)}
            className={
              OrderDelivery
                ? ProductManageOrdersstyle.textDeliverOrderActiv
                : ProductManageOrdersstyle.textDeliverOrder
            }
          >
            .سفارش های تحویل داده شده.
          </span>

          <span
            onClick={() => setOrderDelivery(false)}
            className={
              OrderDelivery
                ? ProductManageOrdersstyle.textDeliverOrder
                : ProductManageOrdersstyle.textDeliverOrderActiv
            }
          >
            .سفارش های در حال انجام.
          </span>
        </div>
      </div>

      <div className={ProductManageOrdersstyle.TableSection}>
        <div className={ProductManageOrdersstyle.DivHeadTable}>
          <span className={ProductManageOrdersstyle.SpanNameCustomer}>
            نام مشتری
          </span>
          <span className={ProductManageOrdersstyle.SpanPriceFactor}>
            مبلغ فاکتور (ریال)
          </span>
          <span className={ProductManageOrdersstyle.SpanTimeOrder}>
            زمان ثبت سفارش
          </span>
          <span className={ProductManageOrdersstyle.SpanPriceFactor}>
            بررسی سفارش
          </span>
        </div>

        <div className={ProductManageOrdersstyle.DivRowOddTables}>
          <span className={ProductManageOrdersstyle.SpanNameCustomer}>
            میلاد
          </span>
          <span className={ProductManageOrdersstyle.SpanPriceFactor}>
            25000
          </span>
          <span className={ProductManageOrdersstyle.SpanTimeOrder}>
            25/02/1401
          </span>
          <span className={ProductManageOrdersstyle.SpanPriceFactor}>
            بررسی سفارش
          </span>
        </div>

        <div className={ProductManageOrdersstyle.DivRowTables}>
          <span className={ProductManageOrdersstyle.SpanNameCustomer}>
            میلاد
          </span>
          <span className={ProductManageOrdersstyle.SpanPriceFactor}>
            25000
          </span>
          <span className={ProductManageOrdersstyle.SpanTimeOrder}>
            25/02/1401
          </span>
          <span className={ProductManageOrdersstyle.SpanPriceFactor}>
            بررسی سفارش
          </span>
        </div>
      </div>

      <ModalOrderRew/>
    </>
  );
};
