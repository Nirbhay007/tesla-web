import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Header from "./components/Header/index.tsx";
import Footer from "./components/Footer/index.tsx";
import { footerData } from "./utils/footerData.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer {...footerData} />
  </React.StrictMode>
);
