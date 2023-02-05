import {  useState } from "react";
import {  useNavigate } from "react-router-dom";

import { ServiceProducts } from "../../services/Servise";
import ManagementLoginStyle from "./ManagementLoginPage.module.css";

export const ManagementLoginPage = () => {
  const [Input, setInputs] = useState({});
  const [Error, setError] = useState(false);
  const [Credit, setCredit] = useState(false);

  function HandelInputValue(e) {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const navigat = useNavigate();

  function HandelEnterManegement() {
    setCredit(true);
    fetch(
      ServiceProducts +
        `/ManagementAconts?&username=${Input.UserName}&Password=${Input.Password}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCredit(false);
        if (data.length > 0) {
          localStorage.setItem("userManagement", true);
          navigat("/ProductManagementPage");
        } else {
          setError(true);
          setTimeout(() => {
            setError(false);
          }, 5000);
        }
      });
  }

  return (
    <div className={ManagementLoginStyle.divMainLoginPage}>
      <div className={ManagementLoginStyle.mainPageLogin}>
        <span className={ManagementLoginStyle.headPageLogin}>
          {" "}
          ورود به پنل مدیریت هایپرمارکت
        </span>
        <div className={ManagementLoginStyle.divInputPageLogin}>
          <label>نام کاربری:</label>
          <input
            className={ManagementLoginStyle.InputsLogin}
            name="UserName"
            onChange={(e) => HandelInputValue(e)}
          />
          <label>رمز عبور :</label>
          <input
            type="password"
            className={ManagementLoginStyle.InputsLogin}
            name="Password"
            onChange={(e) => HandelInputValue(e)}
          />
          <button
            className={ManagementLoginStyle.buttonLogin}
            onClick={HandelEnterManegement}
          >
            ورود به پنل مدیریت
            {/* <Link className="linkStyle" to={`/ProductManagementPage`}> ورود به پنل مدیریت</Link> */}
          </button>
          {Error && (
            <div className={ManagementLoginStyle.DivError}>
              نام کاربری یا رمز عبو صحیح نمی باشد.
            </div>
          )}
          {Credit && (
            <div className={ManagementLoginStyle.DivCredit}>درحال بررسی...</div>
          )}
        </div>
      </div>
    </div>
  );
};
