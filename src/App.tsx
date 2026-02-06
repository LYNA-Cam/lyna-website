import { Routes } from "react-router";
import Header from "./components/header";
import { Route } from "react-router";
import HomePage from "./pages/HomePage";
import { useLocation } from "react-router";
import Footer from "./components/footer";
import CookiesPage from "./pages/CookiesPage";
import TermsPage from "./pages/TermsPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import DataSafety from "./pages/DataSafety";

function App() {
  const location = useLocation();

  return (
    <div className="relative w-full">
      <Header />
      <div className="relative size-full flex flex-col">
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/cookies" element={<CookiesPage />} />
          <Route path="/terms" element={<TermsPage />}></Route>
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/data-safety" element={<DataSafety />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
