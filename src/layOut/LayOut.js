import { Outlet } from "react-router-dom";
import { MainFooter, MainHeader } from "../Component/indexCoponent";

export const MainLayOut = () => {
  return (
    <>
      <MainHeader />
      <Outlet />
      <MainFooter />
    </>
  );
};
