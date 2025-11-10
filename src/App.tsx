import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MolentjePrivacyPolicy from "./pages/MolentjePrivacyPolicy";


const App = () => (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/molentje/privacy-policy" element={<MolentjePrivacyPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
);

export default App;
