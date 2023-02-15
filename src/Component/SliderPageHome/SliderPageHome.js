import { useEffect, useRef, useState } from "react";
import Sliderstyle from "./SliderPageHome.module.css";
// import mainImgPageHome from "./assetsHome/Rectangle 2.png";

const colors = ["#0088FE", "#c4c4c4", "#6a0dad"];
const Images = [
  "https://mag.charkhoneh.com/wp-content/uploads/2020/02/snapp-market-cover.jpeg",
  "https://api.snapp.market/uploads/images/mobile-sliders/63eb4720f335f.jpg",
  "https://api.snapp.market/uploads/images/mobile-sliders/63dfbb8f724d7.png",
];

export const SliderPageHome = () => {
  const delay = 2500;

  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className={Sliderstyle.slideshow}>
      <div
        className={Sliderstyle.slideshowSlider}
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        <img className={Sliderstyle.MainImgPageHome} alt="" src={Images[0]} />
        <img className={Sliderstyle.MainImgPageHome} alt="" src={Images[1]} />
        <img className={Sliderstyle.MainImgPageHome} alt="" src={Images[2]} />
        {/* {colors.map((backgroundColor, index) => (
          <div
            className={Sliderstyle.slide}
            key={index}
            style={{ backgroundColor }}
          >
            <img
              className={Sliderstyle.MainImgPageHome}
              alt=""
              src={Images[index]}
            />
          </div>
        ))} */}
      </div>

      <div className={Sliderstyle.slideshowDots}>
        {colors.map((_, idx) => (
          <div
            key={idx}
            // className={`slideshowDot${index === idx ? " active" : ""}`}
            className={
              index === idx ? Sliderstyle.SlidActive : Sliderstyle.slideshowDot
            }
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );

  // ReactDOM.render(<Slideshow />, document.getElementById("App"));
};
