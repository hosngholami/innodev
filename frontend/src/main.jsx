import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

createRoot(document.getElementById("main-header")).render(
  <StrictMode>
    <Header />
  </StrictMode>
);


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);


createRoot(document.getElementById("footer_contents")).render(
  <StrictMode>
    <Footer />
  </StrictMode>
);



