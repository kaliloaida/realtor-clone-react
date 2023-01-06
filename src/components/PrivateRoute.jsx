import React from "react";
import { Navigate, Outlet } from "react-router";
import{ UseAuthStatus} from "../hooks/useAuthStatus";
import Spinner from "./Spinner";

export default function PrivateRoute() {
  const { loggedIn, checkingStatus } = UseAuthStatus();
  if (checkingStatus) {
    return <Spinner/>
  }
  return loggedIn ? <Outlet /> : <Navigate to="/sign-in/" />;
}
