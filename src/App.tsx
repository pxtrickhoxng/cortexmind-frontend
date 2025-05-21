import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import Faq from "./pages/FaqPage";
import ContactPage from "./pages/ContactPage";
import TestingPage from "./pages/TestingPage";
import { StoreUserId } from "./Components/Userlog";

function App() {
  return (
    <div>
      <StoreUserId />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/testing" element={<TestingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
