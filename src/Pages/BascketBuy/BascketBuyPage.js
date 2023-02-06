import { useEffect, useState } from "react";
import BascketBuyPagestyle from "./BascketBuyPage.module.css";
import ImgTrash from "../../Component/assetsComponents/icons8-trash-can-50.png";

export const BascketBuyPage = () => {
  const [Products, setProducts] = useState([]);
  const [TotPrices, setTotPrices] = useState(0);
  const [TotCounter, setTotCounter] = useState(0);
  const [ItemRemove, setItemRemove] = useState(-1);
  const [ModifyDeletedShow, setModifyDeletedShow]=useState(false)
  let BasketInventory = [];
  useEffect(() => {
    SumationFactor();
  }, [Products]);

  useEffect(() => {
    ChengeBascketInventory();
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
    console.log("!@#bef", BasketInventory);
    BasketInventory.splice(ItemRemove, 1);
    console.log("!@#next", BasketInventory);
    localStorage.setItem("BasketBuying", JSON.stringify(BasketInventory));
    setProducts(BasketInventory);
    setModifyDeletedShow(false)
  }

  function ChengeBascketInventory() {
    BasketInventory = JSON.parse(localStorage.getItem("BasketBuying"))
      ? JSON.parse(localStorage.getItem("BasketBuying"))
      : [];
    setProducts(BasketInventory);
    // const BasketProductindex = BasketInventory.findIndex(
    //   (x) => x.id === addresOneProduct[1]
    // );
    // if (BasketProductindex > -1 && counter == 0) {
    //   BasketInventory.splice(BasketProductindex, 1);
    //   // console.log("BasketInventoryRemove", BasketInventory);
    // } else if (BasketProductindex > -1) {
    //   BasketInventory[BasketProductindex].count = counter;
    // } else if (counter > 0) {
    //   BasketInventory = [
    //     ...BasketInventory,
    //     {
    //       id: `${Product.id}`,
    //       name: `${Product.Lable}`,
    //       count: `${counter}`,
    //       image: `${Product.img}`,
    //       price: `${Product.price}`,
    //     },
    //   ];
    // }
    // console.log("BasketInventory", BasketInventory);
    // localStorage.setItem("BasketBuying", JSON.stringify(BasketInventory));
  }

  return (
    <>
      <div className={BascketBuyPagestyle.divSubjectSection}>
        <span className={BascketBuyPagestyle.textBascketOrder}>سبد خرید</span>
        <span className={BascketBuyPagestyle.textAprowContinue}>
          تایید فاکتور و ادامه خرید
        </span>
      </div>

      {ModifyDeletedShow && (
              <div className={BascketBuyPagestyle.DivConfirmDelete}>
                آیا می خواهید ردیف {ItemRemove+1} حذف شود؟
                <span onClick={HandelRemoveProduct}>
                  {" "}
                  بله{" "}
                </span>
                <span onClick={() => setModifyDeletedShow(false)}>
                  {" "}
                  خیر{" "}
                </span>
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
                    onClick={() => {setItemRemove(i); setModifyDeletedShow(true);}}
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

          {/* <div className={ProductManageOrdersstyle.PaginationDiv}>
            <span
              className={ProductManageOrdersstyle.PaginationBotton}
              onClick={HandelMinesNumberPage}
            >
              قبلی
            </span>
            <span>{PageNumber}</span>
            <span
              className={ProductManageOrdersstyle.PaginationBotton}
              onClick={() => setPageNumber((prv) => prv + 1)}
            >
              بعدی
            </span>
          </div> */}

          {/* {EndPageError && (
            <div className={ProductManageOrdersstyle.PaginationDivError}>
              آخرین صفحه نمایش داده شد!
            </div>
          )}
          {ModalShow && (
            <ModalOrderRew ItemModal={ItemModal} setModalShow={setModalShow} />
          )} */}
        </>
      )}
    </>
  );
};
