import { useEffect, useState } from "react";
import { ServiceProducts } from "../../services/Servise";
import { ModalProductRew } from "../indexCoponent";
import ProductManagestyle from "./ProductManage.module.css";

export const ProductManageSection = () => {
  const [Products, setProducts] = useState([]);
  const [EditProduct, setEditProduct] = useState({});
  const [EndPageError, setEndPageError] = useState(false);
  const [ShowModal, setShowModal] = useState(false);
  const [PageNumber, setPageNumber] = useState(1);
  useEffect(() => {
    getData();
  }, [PageNumber]);

  useEffect(() => {
    if (ShowModal === false) setEditProduct({});
  }, [ShowModal]);

  function getData(Limit = 5) {
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

  function HandelEditFunction(item) {
    setEditProduct(item);
    setShowModal(true);
  }

  return (
    <>
      <div className={ProductManagestyle.divSubjectSection}>
        <span className={ProductManagestyle.textManageProduct}>
          مدیریت کالاها
        </span>

        <span
          className={ProductManagestyle.textPutProduct}
          onClick={() => setShowModal(true)}
        >
          افزودن کالا جدید
        </span>
      </div>

      <div className={ProductManagestyle.TableSection}>
        <div className={ProductManagestyle.DivHeadTable}>
          <span className={ProductManagestyle.SpanImgProduct}>تصویر</span>
          <span className={ProductManagestyle.SpanNameProduct}>نام کالا</span>
          <span className={ProductManagestyle.SpanCategoryProduct}>
            دسته بندی
          </span>
          <span className={ProductManagestyle.SpanEditProduct}>عملیات</span>
        </div>

        {Products.map((item, i) => (
          <div
            className={
              i % 2 === 0
                ? ProductManagestyle.DivRowOddTable
                : ProductManagestyle.DivRowTable
            }
          >
            <span className={ProductManagestyle.SpanImgProduct}>
              <img className={ProductManagestyle.ImgProduct} src={item.img} />
            </span>
            <span className={ProductManagestyle.SpanNameProduct}>
              {item.Lable}
            </span>
            <span className={ProductManagestyle.SpanCategoryProduct}>
              {item.CategoryFarsi}
            </span>
            <div className={ProductManagestyle.SpanEditProduct}>
              <span
                className={ProductManagestyle.buttenEditProduct}
                onClick={() => HandelEditFunction(item)}
              >
                {" "}
                ویرایش{" "}
              </span>{" "}
              /{" "}
              <span className={ProductManagestyle.buttenEditProduct}>
                {" "}
                حذف{" "}
              </span>
            </div>
          </div>
        ))}

        <div className={ProductManagestyle.PaginationDiv}>
          <span
            className={ProductManagestyle.PaginationBotton}
            onClick={HandelMinesNumberPage}
          >
            قبلی
          </span>
          <span>{PageNumber}</span>
          <span
            className={ProductManagestyle.PaginationBotton}
            onClick={() => setPageNumber((prv) => prv + 1)}
          >
            بعدی
          </span>
        </div>

        {EndPageError && (
          <div className={ProductManagestyle.PaginationDivError}>
            آخرین صفحه نمایش داده شد!
          </div>
        )}
      </div>

      {ShowModal && (
        <ModalProductRew
          setShowModal={setShowModal}
          EditProduct={EditProduct}
        />
      )}
    </>
  );
};
