import ModalOrderRewstyle from "./ModalOrderRew.module.css";

export const ModalOrderRew = () => {
  return (
    <>
      <div className={ModalOrderRewstyle.divModalOrderRew}>
        <div className={ModalOrderRewstyle.divModalOrderRewSection}>
            <div>نمایش سفارش</div>
            <span>نام مشتری:</span>
            <span>آدرس:</span>
            <span>تلفن:</span>
            <span>زمان تحویل:</span>
            <span>زمان سفارش</span>
            
        </div>
      </div>
    </>
  );
};
