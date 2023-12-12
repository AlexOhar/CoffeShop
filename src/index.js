import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createRoot } from "react-dom/client";
import {StrictMode, Component } from 'react';
import ProductContext from './ProductContext';


import App from "./components/app/App";
import OurCoffe from './components/our-coffe/our-coffe';
import ForYou from './components/for-your-pleasure/for-your-pleasure';
import Product from './components/product/product';

import "./index.scss";


class ProductProvider extends Component {
  state = {
      dataProduct: [
        {key: 1, photo: 'aromistico-product.jpg', name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99$', best: true, text: `<span style="font-weight: bold;">Description:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`},
        {key: 7, photo: 'presto-product.png', name: 'Presto Coffee Beans 1 kg', country: 'Kenya', price: '16.99$', best: true, text: `<span style="font-weight: bold;">Description:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`},
        {key: 10, photo: 'solimo-product.jpg', name: 'Solimo Coffee Beans 2 kg', country: 'Kenya', price: '10.69$', best: true, text: `<span style="font-weight: bold;">Description:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`},
      ],
  }

  setDataProduct = (dataProduct) => {
      this.setState({ dataProduct });
  }

  render() {
      const { children } = this.props;
      const { dataProduct } = this.state;

      return (
          <ProductContext.Provider value={{ dataProduct, setDataProduct: this.setDataProduct }}>
              {children}
          </ProductContext.Provider>
      );
  }
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <StrictMode>
      <ProductProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<App />} />
            <Route path="/for-your-pleasure" element={<ForYou />} />
            <Route path="/our-coffe" element={<OurCoffe />} />
            <Route path="/product" element={<Product />} />
          </Routes>
        </Router>
        {/* <App /> */}
      </ProductProvider>
    </StrictMode>
);

