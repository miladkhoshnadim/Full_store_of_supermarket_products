import { Navigate } from "react-router-dom";

export const ProtectedRoateManagement = ({ children }) => {

  if (localStorage.userManagement) {
    // console.log("come on");
    return children;
  }

  // console.log("come out");
  return <Navigate to="/ManagementLoginPage" />;
};
