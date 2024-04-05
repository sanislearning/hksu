import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import FrontPage from "./pages/FrontPage";
import Lgnmail from "./pages/Lgnmail";
import TermsAndConditions from "./pages/TermsAndConditions";
import Home from "./pages/Home";
import Tips from "./pages/Tips";
import Report from "./pages/Report";
import Complaint from "./pages/Complaint";
import Language from "./pages/Language";
import Profile from "./pages/Profile";
import Menu from "./pages/Menu";
import SignUp from "./pages/SignUp";
import Loginpswrd from "./pages/Loginpswrd";
import Account from "./pages/Account";
import Contactus from "./pages/Contactus";
import Coin from "./pages/Coin";
import Details from "./pages/Details";
import Notofications from "./pages/Notofications";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/lgnmail":
        title = "";
        metaDescription = "";
        break;
      case "/terms-and-conditions":
        title = "";
        metaDescription = "";
        break;
      case "/home":
        title = "";
        metaDescription = "";
        break;
      case "/tips":
        title = "";
        metaDescription = "";
        break;
      case "/report":
        title = "";
        metaDescription = "";
        break;
      case "/complaint":
        title = "";
        metaDescription = "";
        break;
      case "/details1":
        title = "";
        metaDescription = "";
        break;
      case "/profile":
        title = "";
        metaDescription = "";
        break;
      case "/menu":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up":
        title = "";
        metaDescription = "";
        break;
      case "/loginpswrd":
        title = "";
        metaDescription = "";
        break;
      case "/account3":
        title = "";
        metaDescription = "";
        break;
      case "/contactus":
        title = "";
        metaDescription = "";
        break;
      case "/coin":
        title = "";
        metaDescription = "";
        break;
      case "/details":
        title = "";
        metaDescription = "";
        break;
      case "/notofications":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<FrontPage />} />
      <Route path="/lgnmail" element={<Lgnmail />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="/home" element={<Home />} />
      <Route path="/tips" element={<Tips />} />
      <Route path="/report" element={<Report />} />
      <Route path="/complaint" element={<Complaint />} />
      <Route path="/details1" element={<Language />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/loginpswrd" element={<Loginpswrd />} />
      <Route path="/account3" element={<Account />} />
      <Route path="/contactus" element={<Contactus />} />
      <Route path="/coin" element={<Coin />} />
      <Route path="/details" element={<Details />} />
      <Route path="/notofications" element={<Notofications />} />
    </Routes>
  );
}
export default App;
