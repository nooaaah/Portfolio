import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop";
import "./styles/global.scss";

export default function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <main id="main-content">
        <Outlet /> 
      </main>
      <Footer />
    </>
  );
}
