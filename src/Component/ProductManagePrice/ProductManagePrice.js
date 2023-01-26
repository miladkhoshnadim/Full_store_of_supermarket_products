import ProductManagePricestyle from "./ProductManagePrice.module.css";

export const ProductManagePriceSection = () => {
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
        <div className={ProductManagePricestyle.DivRowOddTables}>
          <span className={ProductManagePricestyle.SpanNameProducts}>
            نام کالا
          </span>
          <input
            className={ProductManagePricestyle.inputPriceProduct}
            placeholder="25500"
          />
          <input
            className={ProductManagePricestyle.inputPriceProduct}
            placeholder="42"
          />
        </div>
        <div className={ProductManagePricestyle.DivRowTables}>
          <span className={ProductManagePricestyle.SpanNameProducts}>
            نام کالا
          </span>
          <input
            className={ProductManagePricestyle.inputPriceProduct}
            placeholder="25500"
          />
          <input
            className={ProductManagePricestyle.inputPriceProduct}
            placeholder="42"
          />
        </div>
      </div>
    </>
  );
};
