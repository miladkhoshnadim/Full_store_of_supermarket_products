import HomeStyle from "./PageHome.module.css";
import mainImgPageHome from "./assetsHome/Rectangle 2.png";
import milckIcon from "./assetsHome/image 4.png";

export const PageHome = () => {
  return (
    <>
      <div className={HomeStyle.divMain}>
        <div className={HomeStyle.mainPageHome}>
          <div>
            <img src={mainImgPageHome} />
          </div>
          <div className={HomeStyle.divOneGroup}>
            <div className={HomeStyle.subjectGroup}>
              دسته بندی گروه لبنیات
            </div>
            <section>
              <div className={HomeStyle.oneProductDiv}>
                <div>
                  <img className={HomeStyle.ImgProducts} src={milckIcon} />
                </div>
                <div className={HomeStyle.explainProduct}>
                  <div>شیر پرچرب میهن 900 گرمی</div>
                  <div className={HomeStyle.explainPriceCount}>
                    <span>25500 ریال</span>
                    <span className={HomeStyle.CounterPluse}>+</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};
