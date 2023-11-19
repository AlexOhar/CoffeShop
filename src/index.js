import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createRoot } from "react-dom/client";
import {StrictMode} from 'react';
import App from "./components/app/App";
import OurCoffe from './components/our-coffe/our-coffe';
import ForYou from './components/for-your-pleasure/for-your-pleasure';
import Product from './components/product/product';

import "./index.scss";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <StrictMode>
      <Router>
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route path="/for-your-pleasure" element={<ForYou />} />
          <Route path="/our-coffe" element={<OurCoffe />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </Router>
      {/* <App /> */}
    </StrictMode>
);