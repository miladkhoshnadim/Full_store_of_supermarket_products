import { useEffect, useState } from "react";
import { ServiceProducts } from "../../services/Servise";
import ProductManagePricestyle from "./ProductManagePrice.module.css";

export const ProductManagePriceSection = () => {
  const [Products, setProducts] = useState([]);
  const [EndPageError, setEndPageError] = useState(false);
  const [PageNumber, setPageNumber] = useState(1);
  useEffect(() => {
    getData();
  }, [PageNumber]);

  function getData(Limit = 6) {
    fetch(ServiceProducts + `/Products?_page=${PageNumber}&_limit=${Limit}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          setProducts(data);
        } else {
          setPageNumber((prv) => prv - 1);
          setEndPageError(true);
          setTimeout(() => {
            setEndPageError(false);
          }, 5000);
        }
      });
  }

  function HandelMinesNumberPage() {
    if (PageNumber > 1) {
      setPageNumber((prv) => prv - 1);
    } else {
      setEndPageError(true);
      setTimeout(() => {
        setEndPageError(false);
      }, 5000);
    }
  }

  return (
    <>
      <div className={ProductManagePricestyle.divSubjectSection}>
        <span className={ProductManagePricestyle.textManageProduct}>
          مدیریت موجودی و قیمت ها
        </span>

        <span className={ProductManagePricestyle.textPutProduct}>
          ذخیره تغییرات
        </span>
      </div>

      <div className={ProductManagePricestyle.TableSection}>
        <div className={ProductManagePricestyle.DivHeadTable}>
          <span className={ProductManagePricestyle.SpanNameProducts}>
            نام کالا
          </span>
          <span className={ProductManagePricestyle.SpanPriceProducts}>
            قیمت (ریال)
          </span>
          <span className={ProductManagePricestyle.SpanPriceProducts}>
            تعداد موجودی
          </span>
        </div>

        {Products.map((item, i) => (
          <div
            className={
              i % 2 === 0
                ? ProductManagePricestyle.DivRowOddTables
                : ProductManagePricestyle.DivRowTables
            }
          >
            <span className={ProductManagePricestyle.SpanNameProducts}>
              {item.Lable}
            </span>
            <input
              type="number"
              className={ProductManagePricestyle.inputPriceProduct}
              placeholder={item.price}
            />
            <input
              type="number"
              className={ProductManagePricestyle.inputPriceProduct}
              placeholder={item.inventory}
            />
          </div>
        ))}

      </div>

      <div className={ProductManagePricestyle.PaginationDiv}>
        <span
          className={ProductManagePricestyle.PaginationBotton}
          onClick={HandelMinesNumberPage}
        >
          قبلی
        </span>
        <span>{PageNumber}</span>
        <span
          className={ProductManagePricestyle.PaginationBotton}
          onClick={() => setPageNumber((prv) => prv + 1)}
        >
          بعدی
        </span>
      </div>

      {EndPageError && (
        <div className={ProductManagePricestyle.PaginationDivError}>
          آخرین صفحه نمایش داده شد!
        </div>
      )}
    </>
  );
};
