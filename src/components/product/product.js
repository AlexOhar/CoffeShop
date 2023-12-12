import { Component } from 'react';
import ProductContext from '../../ProductContext';

import Header from '../header/header';
import Separator from '../separator/separator';
// import InfoBlock from '../info-block/info-block';
import Footer from '../footer/footer';

import './product.scss';

class Product extends Component {
    static contextType = ProductContext;
    
    render() {
        const { dataProduct } = this.context;
        const currId = localStorage.getItem('productId');
        if (dataProduct) {
            const dataProd = dataProduct.find(item => item.key === Number(currId));
            if (dataProd) {
                localStorage.setItem('currGood', JSON.stringify(dataProd));
                // console.log('данные записаны в локал сторедж');
            }
        }
        // console.log(JSON.parse(localStorage.getItem('currGood')));
        const { name, country, price, photo, text } = JSON.parse(localStorage.getItem('currGood'));
        // dataProduct.find(item => item.key === Number(currId)) || 
        return (
            <div className="product">
                <div className='product_pictureBlock'>
                    <Header color='#ffffff' flex='flex-start'/>
                    <img className="product_pictureBlock_img" src='our-coffe.png' alt="shelfs with coffe packages" />
                    <h2>Our Coffee</h2>
                </div>
                {/* <InfoBlock textAlign='left' photo={true} theme='10000'/> */}
                <section className="productBlock">
                    <div className="productBlock_photo">
                        <img className="productBlock_photo_img" src={photo} alt={name} />
                    </div>
                    
                    <div className="productBlock_info">
                        <h2>"About it"</h2>
                        <Separator color="#000" />
                        <p style={{fontWeight: 'bold', textAlign: 'start'}}>Country: <span style={{fontSize: '14px'}}>{country}</span></p>
                        <p  style={{textAlign: 'start' }} dangerouslySetInnerHTML={{__html: text}}></p>
                        <p style={{fontWeight: 'bold', textAlign: 'start'}}>Price: <span style={{fontSize: '24px'}}>{price}</span></p>
                    </div>
                </section>
                <Footer color='#000'/>
            
            </div>
        );
    }
}

export default Product;