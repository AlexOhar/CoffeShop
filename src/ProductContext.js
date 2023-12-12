import { createContext } from 'react';

const ProductContext = createContext();

// export const ProductProvider = ({ children }) => {
//   const dataProduct = [
//     {key: 1, photo: 'aromistico-product.jpg', name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99$', best: true},
//     {key: 2, photo: 'aromistico-product.jpg', name: 'AROMISTICO Coffee 1 kg', country: 'Kenya', price: '6.99$', best: false},
//     {key: 3, photo: 'aromistico-product.jpg', name: 'AROMISTICO Coffee 1 kg', country: 'Columbia', price: '6.99$', best: false},
//   ];

//   return (
//     <ProductContext.Provider value={{ dataProduct }}>
//       {children}
//     </ProductContext.Provider>
//   );
// };

export default ProductContext;
