import ProductManagestyle from "./ProductManage.module.css";

export const ProductManageSection = () => {
  return (
    <>
      <div className={ProductManagestyle.divSubjectSection}>
        <span className={ProductManagestyle.textManageProduct}>
          مدیریت کالاها
        </span>

        <span className={ProductManagestyle.textPutProduct}>
          افزودن کالا جدید
        </span>
      </div>

      <div className={ProductManagestyle.TableSection}>
        <div className={ProductManagestyle.DivHeadTable}>
          <span className={ProductManagestyle.SpanImgProduct}>تصویر</span>
          <span className={ProductManagestyle.SpanNameProduct}>نام کالا</span>
          <span className={ProductManagestyle.SpanCategoryProduct} >دسته بندی</span>
          <span className={ProductManagestyle.SpanEditProduct} >عملیات</span>
        </div>
        <div className={ProductManagestyle.DivRowOddTable}>
          <span className={ProductManagestyle.SpanImgProduct}>تصویر</span>
          <span className={ProductManagestyle.SpanNameProduct}>نام کالا</span>
          <span className={ProductManagestyle.SpanCategoryProduct} >دسته بندی</span>
          <div className={ProductManagestyle.SpanEditProduct} ><span> ویرایش  </span> / <span>  حذف </span></div>
        </div>
        <div className={ProductManagestyle.DivRowTable}>
          <span className={ProductManagestyle.SpanImgProduct}>تصویر</span>
          <span className={ProductManagestyle.SpanNameProduct}>نام کالا</span>
          <span className={ProductManagestyle.SpanCategoryProduct} >دسته بندی</span>
          <div className={ProductManagestyle.SpanEditProduct} ><span> ویرایش  </span> / <span>  حذف </span></div>
        </div>
      </div>
    </>
  );
};
