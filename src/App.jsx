
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import Contact from "./pages/Contact";
import CRM from "./pages/CRM";
import ERP from "./pages/ERP";
import FlexFlowAI from "./pages/FlexFlowAI";
import KinetixPayroll from "./pages/KinetixPayroll";
import AIChatbot from "./pages/AIChatbot";

import ScrollToTop from "./components/ScrollToTop";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
     <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
         
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/crm" element={<CRM />} />
          <Route path="/services/erp" element={<ERP />} />
          <Route path="/services/flexflow-ai" element={<FlexFlowAI />} />
          <Route path="/services/kinetix-payroll" element={<KinetixPayroll />} />
          <Route path="/services/ai-chatbot" element={<AIChatbot />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
