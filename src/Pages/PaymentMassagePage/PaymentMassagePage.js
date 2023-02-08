import PaymentMassagePageStyle from "./PaymentMassagePage.module.css";
import SuccesFullyIcon from "../../Component/assetsComponents/sussesfull.png";
import notSuccesIcon from "../../Component/assetsComponents/notSuccessFull.jpg";
import { useState } from "react";

export const PaymentMassagePage = () => {
  const [SuccesOrNot, setSuccesOrNot] = useState([false, false]);

  return (
    <div className={PaymentMassagePageStyle.divMainLoginPage}>
      <div className={PaymentMassagePageStyle.mainPageLogin}>
        <span className={PaymentMassagePageStyle.headPageLogin}>
          صفحه پرداخت
        </span>
        {SuccesOrNot[0] && (
          <div className={PaymentMassagePageStyle.divMassageIconSucces}>
            <img
              alt=""
              src={SuccesFullyIcon}
              className={PaymentMassagePageStyle.IconSucces}
            />

            <div className={PaymentMassagePageStyle.divMassageSucces}>
              <span>سفارش شما با موفقیت ثبت شد.</span>
              <span>
                سفارش شما در تاریخ 1401/11/29 در آدرس تهران نواب تحویل داده
                خواهد شد.
              </span>
              <span>
                در صورت بروز مشکل با شماره 09184023194 تماس حاصل نمایید.
              </span>
              <span>از خرید شما متشکریم.</span>
            </div>
          </div>
        )}

        {SuccesOrNot[1] && (
          <div className={PaymentMassagePageStyle.divMassageIconNSucces}>
            <img
              alt=""
              src={notSuccesIcon}
              className={PaymentMassagePageStyle.IconSucces}
            />

            <div className={PaymentMassagePageStyle.divMassageSucces}>
              <span>با عرض پوزش، پرداخت شما ناموفق بود.</span>

              <span>
                در صورتی که مبلغ کسر شده طی 72 ساعت آینده به حسابتان عودت داده
                نشد حلال کنید یا با شماره 09184023194 تماس حاصل نمایید.
              </span>
              <span>جهت تلاش مجدد از طریق منو سبد خرید اقدام نمایید.</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
