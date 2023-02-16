import { useContext, useEffect, useState } from "react";
import BascketBuyPagestyle from "./BascketBuyPage.module.css";
import ImgTrash from "../../Component/assetsComponents/icons8-trash-can-50.png";
import { InfoCustomerModal } from "../../Component/indexCoponent";
import { ServiceProducts } from "../../services/Servise";
import { contexInfo } from "../../Component/context/Contex";

export const BascketBuyPage = () => {
  const Info = useContext(contexInfo);
  const [Products, setProducts] = useState(Info.BacketInventory);
  const [TotPrices, setTotPrices] = useState(0);
  const [TotCounter, setTotCounter] = useState(0);
  const [ItemRemove, setItemRemove] = useState(-1);
  const [ModifyDeletedShow, setModifyDeletedShow] = useState(false);
  const [ShowModal, setShowModal] = useState(false);
  const [ShowError, setShowError] = useState([false, false, false, false]);
  const [inputsValue, setInputsValue] = useState(
    JSON.parse(localStorage.getItem("CostomerInfo")) || {}
  );

  let BasketInventory = [];

  useEffect(() => {
    SumationFactor();
  }, [Products]);

  useEffect(() => {
    ChengeBascketInventory();
  }, []);

  useEffect(() => {
    SuccessPaymenting();
  }, []);

  function SumationFactor() {
    setTotPrices(0);
    setTotCounter(0);
    Products.forEach((item) => {
      // Sumation = +item.price + Sumation;
      setTotPrices((prv) => +item.price * item.count + prv);
      setTotCounter((prv) => +item.count + prv);
    });
    // setTotPrices(Sumation);
  }

  function HandelRemoveProduct() {
    BasketInventory = [...Products];
    // console.log("!@#bef", BasketInventory);
    BasketInventory.splice(ItemRemove, 1);
    // console.log("!@#next", BasketInventory);
    // BacketInventory
    Info.setBacketInventory(BasketInventory);
    setProducts(BasketInventory);
    localStorage.setItem("BasketBuying ", JSON.stringify(BasketInventory));
    // setProducts(BasketInventory);
    setModifyDeletedShow(false);
  }

  function ChengeBascketInventory() {
    BasketInventory = JSON.parse(localStorage.getItem("BasketBuying"))
      ? JSON.parse(localStorage.getItem("BasketBuying"))
      : [];
    setProducts(BasketInventory);
  }

  function SuccessPaymenting() {
    const ConditionPay = JSON.parse(localStorage.getItem("PaymentCondition"))
      ? JSON.parse(localStorage.getItem("PaymentCondition"))
      : "";

    if (ConditionPay == "true") {
      // const CostomerInfo = JSON.parse(localStorage.getItem("CostomerInfo"))
      setShowError([false, true, false, false]);
      SumationFactor();
      const NTotPrice = JSON.parse(localStorage.getItem("BasketBuying")).reduce(
        (a, b) => +a + +b.price * +b.count,
        0
      );
      console.log("TotPrices", NTotPrice);
      fetch(ServiceProducts + `/users`, {
        method: "POST",
        body: JSON.stringify({
          username: `${inputsValue.username}`,
          expectAt: `${inputsValue.expectAt}`,
          address: `${inputsValue.address}`,
          lastname: `${inputsValue.lastname}`,
          phone: `${inputsValue.phone}`,
          Explain: `${inputsValue.Explain}`,
          prices: `${NTotPrice}`,
          delivered: `${false}`,
          createdAt: `${new Date().toLocaleDateString()}`,
          // products: Info.BacketInventory,
          products: JSON.parse(localStorage.getItem("BasketBuying")) || [],
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }).then(() => {
        setShowError([false, false, true, false]);
        setTimeout(() => {
          setShowError([false, false, false, false]);
        }, 5000);
        localStorage.removeItem("PaymentCondition");
        localStorage.removeItem("CostomerInfo");
        localStorage.setItem("BasketBuying", JSON.stringify([]));
        Info.setBacketInventory([]);
        setProducts([]);
      });
    } else if (ConditionPay == "false") {
      setShowError([false, false, false, true]);
      setTimeout(() => {
        setShowError([false, false, false, false]);
      }, 5000);
    }
  }

  function ContinueBuying() {
    if (Products.length > 0) {
      setShowModal(true);
    } else {
      setShowError([true, false, false, false]);
      setTimeout(() => {
        setShowError([false, false, false, false]);
      }, 5000);
    }
  }

  return (
    <div className={BascketBuyPagestyle.divMainPage}>
      <div className={BascketBuyPagestyle.DivmainSection}>
        <div className={BascketBuyPagestyle.divSubjectSection}>
          <span className={BascketBuyPagestyle.textBascketOrder}>سبد خرید</span>
          <span
            className={BascketBuyPagestyle.textAprowContinue}
            onClick={ContinueBuying}
          >
            تایید فاکتور و ادامه خرید
          </span>
        </div>

        {ModifyDeletedShow && (
          <div className={BascketBuyPagestyle.DivConfirmDelete}>
            آیا می خواهید ردیف {ItemRemove + 1} حذف شود؟
            <span onClick={HandelRemoveProduct}> بله </span>
            <span onClick={() => setModifyDeletedShow(false)}> خیر </span>
          </div>
        )}

        {ShowError[2] && (
          <div className={BascketBuyPagestyle.divLoding}>
            خرید شما با موفقیت انجام شد. ...
          </div>
        )}

        {ShowError[3] && (
          <div className={BascketBuyPagestyle.divLoding}>
            پرداخت شما ناموفق بود مجددا تلاش کنید. ...
          </div>
        )}

        {Products.length < 1 ? (
          <div className={BascketBuyPagestyle.divLoding}>
            هنوز سبد خرید خالیست ...
          </div>
        ) : (
          <>
            <div className={BascketBuyPagestyle.TableSection}>
              <div className={BascketBuyPagestyle.DivHeadTable}>
                <span className={BascketBuyPagestyle.SpanNameRows}>ردیف</span>
                <span className={BascketBuyPagestyle.SpanImg}>تصویر</span>
                <span className={BascketBuyPagestyle.SpanNameProduct}>
                  نام کالا
                </span>
                <span className={BascketBuyPagestyle.SpanPriceFactor}>
                  مبلغ (ریال)
                </span>
                <span className={BascketBuyPagestyle.SpanCountProduct}>
                  تعداد
                </span>
                <span className={BascketBuyPagestyle.SpanOperator}>عملیات</span>
              </div>
              {Products.map((item, i) => (
                <div
                  className={
                    i % 2 === 0
                      ? BascketBuyPagestyle.DivRowOddTables
                      : BascketBuyPagestyle.DivRowTables
                  }
                >
                  <span className={BascketBuyPagestyle.SpanNameRows}>
                    {i + 1}
                  </span>
                  <span className={BascketBuyPagestyle.SpanImg}>
                    <img
                      className={BascketBuyPagestyle.ImgProduct}
                      alt=""
                      src={item.image}
                    />
                  </span>
                  <span className={BascketBuyPagestyle.SpanNameProduct}>
                    {item.name}
                  </span>
                  <span className={BascketBuyPagestyle.SpanPriceFactor}>
                    {item.price}
                  </span>
                  <span className={BascketBuyPagestyle.SpanCountProduct}>
                    {item.count}
                  </span>
                  <span className={BascketBuyPagestyle.SpanOperator}>
                    <img
                      onClick={() => {
                        setItemRemove(i);
                        setModifyDeletedShow(true);
                      }}
                      className={BascketBuyPagestyle.ImgTrashOperator}
                      alt=""
                      src={ImgTrash}
                    />
                  </span>
                </div>
              ))}

              <div className={BascketBuyPagestyle.DivFooterTable}>
                <span className={BascketBuyPagestyle.SpanTotText}>
                  مجموع فاکتور:
                </span>
                <span className={BascketBuyPagestyle.SpanTotPrice}>
                  {TotPrices} ریال
                </span>
                <span className={BascketBuyPagestyle.SpanTotCounter}>
                  {TotCounter} قلم کالا
                </span>
              </div>
            </div>
          </>
        )}

        {ShowModal && (
          <InfoCustomerModal
            setShowModal={setShowModal}
            inputsValue={inputsValue}
            setInputsValue={setInputsValue}
          />
        )}

        {ShowError[0] && (
          <div className={BascketBuyPagestyle.divLoding}>
            امکان ادامه خرید با سبد خالی ممکن نیست ...
          </div>
        )}

        {ShowError[1] && (
          <div className={BascketBuyPagestyle.divLoding}>
            در حال ثبت خرید ...
          </div>
        )}
      </div>
    </div>
  );
};
