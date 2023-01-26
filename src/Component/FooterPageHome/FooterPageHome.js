import FooterPageHomeStyle from "./FooterPageHome.module.css";
import LocationImg from "../assetsComponents/image 10.png";
import TeleghonImg from "../assetsComponents/image 11.png";
import EmailImg from "../assetsComponents/image 12.png";
import mobileImg from "../assetsComponents/image 13.png";

export const FooterPageHome = () => {
  return (
    <div className={FooterPageHomeStyle.MainDisplay}>
      <div className={FooterPageHomeStyle.MainFooterSection}>
        <p className={FooterPageHomeStyle.backgrundP}>
          هایپر مارکت خوش ندیم از سال 1372 آغاز به کار کرد و تجارب ارزشمندی از
          شناخت اصالت و کیفت کالا را داراست و نسخه اپلیکیشن این فروشگاه از سال
          1401 فعالیت خود را آغاز کرده و به دنبال کسب رضایت مشتریان عزیز می
          باشد. لطفا با نظرات خود ما را در مسیر جلب رضایت مشتریان یاری فرمایید.
          انتقادات و پیشنهادات ارزشمند خود را از مسیر های زیر با ما در میان
          بگذارید.
        </p>
        <div className={FooterPageHomeStyle.DivContactInformation}>
          <div className={FooterPageHomeStyle.DivFooterRight}>
            <div className={FooterPageHomeStyle.DivSingleInfo}>
              <img
                alt=""
                src={LocationImg}
                className={FooterPageHomeStyle.LocationIcon}
              />
              <span className={FooterPageHomeStyle.SpanBackdrundInfo}>
                آدرس: تهران نواب امام خمینی هایپرمارکت خوش ندیم
              </span>
            </div>
            <div className={FooterPageHomeStyle.DivSingleInfo}>
              <img
                alt=""
                src={TeleghonImg}
                className={FooterPageHomeStyle.LocationIcon}
              />
              <span className={FooterPageHomeStyle.SpanBackdrundInfo}>
                تلفن: 021-66360366
              </span>
            </div>
          </div>

          <div className={FooterPageHomeStyle.DivFooterRight}>
            <div className={FooterPageHomeStyle.DivSingleInfo}>
              <img
                alt=""
                src={EmailImg}
                className={FooterPageHomeStyle.LocationIcon}
              />
              <span className={FooterPageHomeStyle.SpanBackdrundInfo}>
                ایمیل: miladkhoshnadim1372@gmail.com
              </span>
            </div>
            <div className={FooterPageHomeStyle.DivSingleInfo}>
              <img
                alt=""
                src={mobileImg}
                className={FooterPageHomeStyle.LocationIcon}
              />
              <span className={FooterPageHomeStyle.SpanBackdrundInfo}>
                مبایل: 09184023194 و 09331037791
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
