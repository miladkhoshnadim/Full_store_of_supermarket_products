import { useEffect, useState } from "react";
import BascketBuyPagestyle from "./BascketBuyPage.module.css";

export const BascketBuyPage = () => {
  const [Products, setProducts] = useState([
    {
      id: 43,
      count: "1",
      name: "ماست گاله کمچرب",
      image:
        "https://api.snapp.market/media/cache/product-variation_image_thumbnail/uploads/images/vendors/users/app/6321c84856871.jpg",
      price: "358000",
    },
    {
      id: 44,
      count: "1",
      name: "!بهترین دوغ غرب آسیا",
      image:
        "https://alis.ir/en/storage/2020/04/%D8%A8%D8%AF%D9%88%D9%86-%DA%AF%D8%A7%D8%B2.jpg",
      price: "308000",
    },
  ]);

  const [TotPrices, setTotPrices] = useState(0);
  const [TotCounter, setTotCounter] = useState(0);
  useEffect(() => {
    SumationFactor();
  }, [Products]);

  function SumationFactor() {
    setTotPrices(0);
    setTotCounter(0);
    Products.forEach((item) => {
      // Sumation = +item.price + Sumation;
      setTotPrices((prv) => +item.price + prv);
      setTotCounter((prv) => +item.count + prv);
    });
    // setTotPrices(Sumation);
  }

  return (
    <>
      <div className={BascketBuyPagestyle.divSubjectSection}>
        <span className={BascketBuyPagestyle.textBascketOrder}>سبد خرید</span>
        <span className={BascketBuyPagestyle.textAprowContinue}>
          تایید فاکتور و ادامه خرید
        </span>
      </div>

      {Products.length < 1 ? (
        <div className={BascketBuyPagestyle.divLoding}>در حال بارگذاری...</div>
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
                <span className={BascketBuyPagestyle.SpanOperator}>عملیات</span>
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
