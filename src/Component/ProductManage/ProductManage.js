import { useEffect, useState } from "react";
import { ServiceProducts } from "../../services/Servise";
import { ModalProductRew } from "../indexCoponent";
import ProductManagestyle from "./ProductManage.module.css";
import imgTrash from "../assetsComponents/icons8-trash-can-50.png";
import imgEdit from "../assetsComponents/icons8-pencil-50.png";

export const ProductManageSection = () => {
  const [SearchInput, setSearchInput] = useState("");
  const [Products, setProducts] = useState([]);
  const [EditProduct, setEditProduct] = useState({});
  const [DeleteProduct, setDeleteProduct] = useState({});
  const [EndPageError, setEndPageError] = useState(false);
  const [ShowModal, setShowModal] = useState(false);
  const [ItemDeletedShow, setItemDeletedShow] = useState([false, false, false]);
  const [PageNumber, setPageNumber] = useState(1);
  useEffect(() => {
    getData();
  }, [PageNumber, SearchInput]);

  useEffect(() => {
    if (ShowModal === false) {
      getData();
      setEditProduct({});
    }
  }, [ShowModal]);

  function HandelSerchProduct(e) {
    setSearchInput(e.target.value);
  }

  function getData(Limit = 5) {
    fetch(
      ServiceProducts +
        `/Products?_page=${PageNumber}&_limit=${Limit}&q=${SearchInput}`
    )
      // fetch(ServiceProducts + `/Products?_page=${PageNumber}&_limit=${Limit}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          setProducts(data);
        } else {
          setPageNumber((prv) => (prv > 1 ? prv - 1 : prv));
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

  function requestToDelete(item) {
    setItemDeletedShow([false, false, true]);
    setDeleteProduct(item);
    setTimeout(() => {
      setItemDeletedShow([false, false, false]);
    }, 9000);
  }

  function handelDeleteItem(id) {
    setItemDeletedShow([true, false, false]);
    fetch(ServiceProducts + `/Products/${id}`, {
      method: "DELETE",
    }).then(() => {
      getData();
      setItemDeletedShow([false, true, false]);
      setTimeout(() => {
        setItemDeletedShow([false, false, false]);
      }, 4000);
    });
  }

  return (
    <>
      <div className={ProductManagestyle.divSubjectSection}>
        <span className={ProductManagestyle.textManageProduct}>
          مدیریت کالاها
        </span>
        <input
          className={ProductManagestyle.InputSearchProduct}
          placeholder="جست و جو "
          onChange={(e) => HandelSerchProduct(e)}
        />
        <span
          className={ProductManagestyle.textPutProduct}
          onClick={() => setShowModal(true)}
        >
          افزودن کالا جدید
        </span>
      </div>
      {Products.length < 1 ? (
        <div className={ProductManagestyle.divLoding}>در حال بارگذاری...</div>
      ) : (
        <>
          <div className={ProductManagestyle.TableSection}>
            {ItemDeletedShow[0] && (
              <div className={ProductManagestyle.PaginationDivError}>
                در حال حذف آیتم ...
              </div>
            )}
            {ItemDeletedShow[1] && (
              <div className={ProductManagestyle.PaginationDivError}>
                آیتم مورد نظر با موفقیت حذف شد ...!
              </div>
            )}
            {ItemDeletedShow[2] && (
              <div className={ProductManagestyle.DivConfirmDelete}>
                آیا می خواهید {DeleteProduct.Lable} حذف شود؟
                <span onClick={() => handelDeleteItem(DeleteProduct.id)}>
                  {" "}
                  بله{" "}
                </span>
                <span onClick={() => setItemDeletedShow([false, false, false])}>
                  {" "}
                  خیر{" "}
                </span>
              </div>
            )}

            <div className={ProductManagestyle.DivHeadTable}>
              <span className={ProductManagestyle.SpanImgProduct}>تصویر</span>
              <span className={ProductManagestyle.SpanNameProduct}>
                نام کالا
              </span>
              <span className={ProductManagestyle.SpanCategoryProduct}>
                دسته بندی
              </span>
              <span className={ProductManagestyle.SpanEditProduct}>عملیات</span>
            </div>

            {Products.map((item, i) => (
              <div
                key={item.id}
                className={
                  i % 2 === 0
                    ? ProductManagestyle.DivRowOddTable
                    : ProductManagestyle.DivRowTable
                }
              >
                <span className={ProductManagestyle.SpanImgProduct}>
                  <img
                    className={ProductManagestyle.ImgProduct}
                    src={item.img}
                  />
                </span>
                <span className={ProductManagestyle.SpanNameProduct}>
                  {item.Lable}
                </span>
                <span className={ProductManagestyle.SpanCategoryProduct}>
                  {item.CategoryFarsi}
                </span>
                <div className={ProductManagestyle.SpanEditProduct}>
                  <img
                    onClick={() => HandelEditFunction(item)}
                    src={imgEdit}
                    className={ProductManagestyle.TrashImg}
                  />

                  <img
                    onClick={() => requestToDelete(item)}
                    src={imgTrash}
                    className={ProductManagestyle.TrashImg}
                  />
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
      )}
    </>
  );
};
