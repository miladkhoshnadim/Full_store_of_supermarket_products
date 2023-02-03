import { useEffect, useState } from "react";
import { ServiceProducts } from "../../services/Servise";
import { GetDataFetch } from "../indexCoponent";
import ProductManagePricestyle from "./ProductManagePrice.module.css";

export const ProductManagePriceSection = () => {
  const [SearchInput, setSearchInput] = useState("");
  const [Products, setProducts] = useState([]);
  const [inputs, setInputs] = useState([]);
  const [EndPageError, setEndPageError] = useState(false);
  const [SavedChengs, setSavedChenge] = useState([false, false]);
  const [PageNumber, setPageNumber] = useState(1);
  let newArray = [];
  useEffect(() => {
    getData();
  }, [PageNumber, SearchInput]);

  // const {result} = GetDataFetch("/Products",PageNumber,6 );
  // const {result} = GetDataFetch(`/Products?_page=${PageNumber}&_limit=6`);

  function HandelSerchProduct(e) {
    setSearchInput(e.target.value);
  }

  function getData(Limit = 6) {
    setProducts([]);
    // fetch(ServiceProducts + `/Products?_page=${PageNumber}&_limit=${Limit}`)
    fetch(
      ServiceProducts +
        `/Products?_page=${PageNumber}&_limit=${Limit}&q=${SearchInput}`
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

  function handelInputs(e) {
    newArray = [...inputs];
    const index = newArray.findIndex((item) => item.id === e.target.id);

    if (index > -1) {
      newArray[index] = { ...newArray[index], [e.target.name]: e.target.value };
    } else {
      newArray = [
        ...newArray,
        { id: e.target.id, [e.target.name]: e.target.value },
      ];
    }
    setInputs(newArray);
  }
  // console.log(inputs);

  function handelSaveChenge() {
    if (inputs.length > 0) {
      
      // console.log("در حال ثبت تغییرات");
      setSavedChenge([false, true, false]);
      inputs.forEach((item, ind) => {
        fetch(ServiceProducts + `/Products/${item.id}`, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "PATCH",
          body: JSON.stringify({
            ...item,
          }),
        }).then(() => {
          if (ind === inputs.length - 1) {
            
            setSavedChenge([false, false, true]);
            // console.log(" تغییرات ثبت شد");
            setTimeout(() => {
              setSavedChenge([false, false, false]);
            }, 4000);
            getData();
            setInputs([]);
          }
        });
      });
    } else {
      setSavedChenge([true, false, false]);
      setTimeout(() => {
        setSavedChenge([false, false, false]);
      }, 4000);
    }
  }

  return (
    <>
      <div className={ProductManagePricestyle.divSubjectSection}>
        <span className={ProductManagePricestyle.textManageProduct}>
          مدیریت موجودی و قیمت ها
        </span>
        <input
          className={ProductManagePricestyle.InputSearchProduct}
          placeholder="جست و جو "
          onChange={(e) => HandelSerchProduct(e)}
        />
        <span
          className={ProductManagePricestyle.textPutProduct}
          onClick={handelSaveChenge}
        >
          ذخیره تغییرات
        </span>
      </div>
      {SavedChengs[0] && (
        <div className={ProductManagePricestyle.ErrorsDiv}>هنوز تغییری در قیمت ها یا موجودی ها ایجاد نشده است...</div>
      )}
      {SavedChengs[1] && <div className={ProductManagePricestyle.ErrorsDiv}>در حال ثبت تغییرات ...</div>}
      {SavedChengs[2] && <div className={ProductManagePricestyle.ErrorsDiv}>تغییرات با موفقیت ثبت شد ...</div>}
      {Products.length < 1 ? (
        <div className={ProductManagePricestyle.divLoding}>
          در حال بارگذاری...
        </div>
      ) : (
        <>
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
                key={i}
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
                  // value={item.price}
                  id={item.id}
                  type="number"
                  className={ProductManagePricestyle.inputPriceProduct}
                  placeholder={item.price}
                  name="price"
                  onChange={(e) => handelInputs(e)}
                />
                <input
                  // value={item.inventory}
                  id={item.id}
                  type="number"
                  className={ProductManagePricestyle.inputPriceProduct}
                  placeholder={item.inventory}
                  name="inventory"
                  onChange={(e) => handelInputs(e)}
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
      )}
    </>
  );
};
