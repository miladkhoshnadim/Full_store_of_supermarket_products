import FooterPageHomeStyle from "./FooterPageHome.module.css";

export const FooterPageHome = () => {
  return (
    <div className={FooterPageHomeStyle.MainDisplay}>
      <div className={FooterPageHomeStyle.MainFooterSection}>

        <div className={FooterPageHomeStyle.DivFooterRight} >
          <div>
            <img />
            <span>شماره تماس:</span>
          </div>
          <div>
            <img />
            <span>شماره تماس:</span>
          </div>
          <div>
            <img />
            <span>شماره تماس:</span>
          </div>
        </div>

        <div className={FooterPageHomeStyle.DivFooterRight}>
          <div>
            <img />
            <span>شماره تماس:</span>
          </div>
          <div>
            <img />
            <span>شماره تماس:</span>
          </div>
          <div>
            <img />
            <span>شماره تماس:</span>
          </div>
        </div>
      </div>
    </div>
  );
};
