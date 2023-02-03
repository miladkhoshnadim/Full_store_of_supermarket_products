import { useEffect, useState } from "react";
import ProductManageOrdersstyle from "./ProductManageOrders.module.css";
import { ModalOrderRew, parseLinkHeader } from "../indexCoponent";
import { ServiceProducts } from "../../services/Servise";
import ImgMoreInfo from "../assetsComponents/icons8-more-50.png";

export const ProductManageOrdersSection = () => {
  const [SearchInput, setSearchInput] = useState("");
  const [OrderDelivery, setOrderDelivery] = useState(false);
  const [ModalShow, setModalShow] = useState(false);
  const [Products, setProducts] = useState([]);
  const [EndPageError, setEndPageError] = useState(false);
  const [ItemModal, setItemModal] = useState({});
  const [PageNumber, setPageNumber] = useState(1);
  useEffect(() => {
    getData();
  }, [PageNumber, OrderDelivery, SearchInput, ModalShow]);

  function HandelSerchProduct(e) {
    setSearchInput(e.target.value);
  }

  function getData(Limit = 5) {
    setProducts([]);
    fetch(
      ServiceProducts +
        `/users?_page=${PageNumber}&_limit=${Limit}&delivered=${OrderDelivery}&q=${SearchInput}`
    )
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

  function HandelShowModal(item) {
    setItemModal(item);
    setModalShow(true);
  }

  return (
    <>
      <div className={ProductManageOrdersstyle.divSubjectSection}>
        <span className={ProductManageOrdersstyle.textManageOrder}>
          مدیریت سفارش ها
        </span>
        <input
          className={ProductManageOrdersstyle.InputSearchOrder}
          placeholder="جست و جو "
          onChange={(e) => HandelSerchProduct(e)}
        />
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

      {Products.length < 1 ? (
        <div className={ProductManageOrdersstyle.divLoding}>
          در حال بارگذاری...
        </div>
      ) : (
        <>
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
            {Products.map((item, i) => (
              <div
                className={
                  i % 2 === 0
                    ? ProductManageOrdersstyle.DivRowOddTables
                    : ProductManageOrdersstyle.DivRowTables
                }
              >
                <span className={ProductManageOrdersstyle.SpanNameCustomer}>
                  {item.username}-{item.lastname}
                </span>
                <span className={ProductManageOrdersstyle.SpanPriceFactor}>
                  {item.prices}
                </span>
                <span className={ProductManageOrdersstyle.SpanTimeOrder}>
                  {item.createdAt}
                </span>
                <span
                  className={ProductManageOrdersstyle.SpanRewOrder}
                  onClick={() => HandelShowModal(item)}
                >
                  <img
                    className={ProductManageOrdersstyle.MoreInfoImg}
                    src={ImgMoreInfo}
                  />
                </span>
              </div>
            ))}
          </div>

          <div className={ProductManageOrdersstyle.PaginationDiv}>
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
          </div>

          {EndPageError && (
            <div className={ProductManageOrdersstyle.PaginationDivError}>
              آخرین صفحه نمایش داده شد!
            </div>
          )}
          {ModalShow && (
            <ModalOrderRew ItemModal={ItemModal} setModalShow={setModalShow} />
          )}
        </>
      )}
    </>
  );
};
