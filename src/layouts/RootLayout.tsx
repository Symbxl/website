import MainNavigation from "../components/MainNavigation";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <MainNavigation />
      <Outlet />
      <Footer />
    </>
  )
}

