import HomeStyle from "./PageHome.module.css";
import mainImgPageHome from "./assetsHome/Rectangle 2.png";
import moreThan from "./assetsHome/icons8-more-than-30.png";
import { ServiceProducts } from "../../services/Servise";
import { useRef, useEffect, useState } from "react";
import lessthan from "./assetsHome/icons8-less-than-30.png";
import { CardProduct } from "../../Component/CardProduct/CardProduct";
import { FooterPageHome } from "../../Component/FooterPageHome/FooterPageHome";

const ACTIONS = {
  dairy: "dairy",
  Grocery: "Grocery",
  beans: "beans",
  celolozy: "celolozy",
  Cleaner: "Cleaner",
};
// const reducerDivadedData = (state, action) => {
//   switch (action.type) {
//     case ACTIONS.Grocery:
//       return { ...state, Grocery: [...state.Grocery] };
//     case ACTIONS.beans:
//       return { ...state, beans: [] };
//     case ACTIONS.dairy:
//       return { ...state, dairy: [] };
//     default:
//       return state;
//   }
// };

export const PageHome = () => {
  const [data, setdata] = useState([]);

  const [arrowDisable, setArrowDisable] = useState(true);
  const elementRef = useRef(null);
  const [Grocery, setGrocery] = useState([]);
  const GroceryRef = useRef(null);
  const [dairy, setdairy] = useState([]);
  const dairyRef = useRef(null);
  const [beans, setbeans] = useState([]);
  const beansRef = useRef(null);
  const [celolozy, setcelolozy] = useState([]);
  const celolozyRef = useRef(null);
  const [Cleaner, setCleaner] = useState([]);
  const CleanerRef = useRef(null);
  // const [{ dairy, beans, Grocery }, dispatch] = useReducer(reducerDivadedData, {
  //   dairy: [],
  //   beans: [],
  //   Grocery: [],
  // });

  useEffect(() => {
    getProducts();
  }, []);

  function getProducts() {
    console.log("1111", ServiceProducts + "/Products");
    fetch(ServiceProducts + "/Products")
      .then((res) => res.json())
      .then((data) => {
        setdata(data);
        data.forEach((Pro) => {
          if (Pro.group === ACTIONS.dairy) {
            setdairy((prv) => [...prv, Pro]);
          } else if (Pro.group === ACTIONS.Grocery) {
            setGrocery((prv) => [...prv, Pro]);
          } else if (Pro.group === ACTIONS.beans) {
            setbeans((prv) => [...prv, Pro]);
          } else if (Pro.group === ACTIONS.celolozy) {
            setcelolozy((prv) => [...prv, Pro]);
          } else if (Pro.group === ACTIONS.Cleaner) {
            setCleaner((prv) => [...prv, Pro]);
          }

          // if (Pro.group === ACTIONS.dairy) {
          //   dispatch({ type: ACTIONS.dairy });
          // } else if (Pro.group === ACTIONS.Grocery) {
          //   dispatch({ type: ACTIONS.Grocery });
          // } else if (Pro.group === ACTIONS.beans) {
          //   dispatch({ type: ACTIONS.beans });
          // }
        });
      });
  }

  const handleHorizantalScroll = (element, speed, distance, step) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
      if (element.scrollLeft === 0) {
        setArrowDisable(true);
      } else {
        setArrowDisable(false);
      }
    }, speed);
  };

  console.log("Cleaner", Cleaner);

  return (
    <>
      <div className={HomeStyle.divMain}>
        <div className={HomeStyle.mainPageHome}>
          <div>
            <img
              className={HomeStyle.MainImgPageHome}
              alt=""
              src={mainImgPageHome}
            />
          </div>

          <div className={HomeStyle.divOneGroup}>
            <div className={HomeStyle.subjectGroup}>دسته بندی گروه لبنیات</div>
            <div className={HomeStyle.WithScorollDiv}>
              <span
                className={HomeStyle.ClickScuroll}
                onClick={() => {
                  handleHorizantalScroll(dairyRef.current, 15,232, 10);
                }}
                disabled={arrowDisable}
              >
                <img className={HomeStyle.moreThanImg} alt="" src={moreThan} />
              </span>
              <div className={HomeStyle.OneGroupSection} ref={dairyRef}>
                {dairy.map((item) => (
                  <CardProduct item={item} />
                ))}
              </div>
              <span
                className={HomeStyle.ClickScuroll}
                onClick={() => {
                  handleHorizantalScroll(dairyRef.current, 15, 232, -10);
                }}
              >
                {" "}
                <img
                  className={HomeStyle.moreThanImg}
                  alt=""
                  src={lessthan}
                />{" "}
              </span>
            </div>
          </div>

          <div className={HomeStyle.divOneGroup}>
            <div className={HomeStyle.subjectGroup}>
              دسته بندی گروه خواروبار
            </div>
            <div className={HomeStyle.WithScorollDiv}>
              <span
                className={HomeStyle.ClickScuroll}
                onClick={() => {
                  handleHorizantalScroll(GroceryRef.current, 15, 232, 10);
                }}
                disabled={arrowDisable}
              >
                <img className={HomeStyle.moreThanImg} alt="" src={moreThan} />
              </span>
              <div className={HomeStyle.OneGroupSection} ref={GroceryRef}>
                {Grocery.map((item) => (
                  <CardProduct item={item} />
                ))}
              </div>
              <span
                className={HomeStyle.ClickScuroll}
                onClick={() => {
                  handleHorizantalScroll(GroceryRef.current, 15, 232, -10);
                }}
              >
                {" "}
                <img
                  className={HomeStyle.moreThanImg}
                  alt=""
                  src={lessthan}
                />{" "}
              </span>
            </div>
          </div>

          <div className={HomeStyle.divOneGroup}>
            <div className={HomeStyle.subjectGroup}>دسته بندی گروه حبوبات</div>
            <div className={HomeStyle.WithScorollDiv}>
              <span
                className={HomeStyle.ClickScuroll}
                onClick={() => {
                  handleHorizantalScroll(beansRef.current, 15, 232, 10);
                }}
                disabled={arrowDisable}
              >
                <img className={HomeStyle.moreThanImg} alt="" src={moreThan} />
              </span>
              <div className={HomeStyle.OneGroupSection} ref={beansRef}>
                {beans.map((item) => (
                  <CardProduct item={item} />
                ))}
              </div>
              <span
                className={HomeStyle.ClickScuroll}
                onClick={() => {
                  handleHorizantalScroll(beansRef.current, 15, 232, -10);
                }}
              >
                {" "}
                <img
                  className={HomeStyle.moreThanImg}
                  alt=""
                  src={lessthan}
                />{" "}
              </span>
            </div>
          </div>

          <div className={HomeStyle.divOneGroup}>
            <div className={HomeStyle.subjectGroup}>
              دسته بندی گروه سلولزی و بهداشتی
            </div>
            <div className={HomeStyle.WithScorollDiv}>
              <span
                className={HomeStyle.ClickScuroll}
                onClick={() => {
                  handleHorizantalScroll(celolozyRef.current, 15, 232, 10);
                }}
                disabled={arrowDisable}
              >
                <img className={HomeStyle.moreThanImg} alt="" src={moreThan} />
              </span>
              <div className={HomeStyle.OneGroupSection} ref={celolozyRef}>
                {celolozy.map((item) => (
                  <CardProduct item={item} />
                ))}
              </div>
              <span
                className={HomeStyle.ClickScuroll}
                onClick={() => {
                  handleHorizantalScroll(celolozyRef.current, 15, 232, -10);
                }}
              >
                {" "}
                <img
                  className={HomeStyle.moreThanImg}
                  alt=""
                  src={lessthan}
                />{" "}
              </span>
            </div>
          </div>

          <div className={HomeStyle.divOneGroup}>
            <div className={HomeStyle.subjectGroup}>
              دسته بندی گروه شوینده و ضدعفونی کننده
            </div>
            <div className={HomeStyle.WithScorollDiv}>
              <span
                className={HomeStyle.ClickScuroll}
                onClick={() => {
                  handleHorizantalScroll(CleanerRef.current, 15, 232, 10);
                }}
                disabled={arrowDisable}
              >
                <img className={HomeStyle.moreThanImg} alt="" src={moreThan} />
              </span>
              <div className={HomeStyle.OneGroupSection} ref={CleanerRef}>
                {Cleaner.map((item) => (
                  <CardProduct item={item} />
                ))}
              </div>
              <span
                className={HomeStyle.ClickScuroll}
                onClick={() => {
                  handleHorizantalScroll(CleanerRef.current, 15, 232, -10);
                }}
              >
                {" "}
                <img
                  className={HomeStyle.moreThanImg}
                  alt=""
                  src={lessthan}
                />{" "}
              </span>
            </div>
          </div>

          <FooterPageHome />
        </div>
      </div>
    </>
  );
};
