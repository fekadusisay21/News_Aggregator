/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { logged } = useAuth();
  return logged ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
