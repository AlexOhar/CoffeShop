import { Component } from 'react';

import Header from '../header/header';
import InfoBlock from '../info-block/info-block';
import ProductList from '../product-list/product-list';
import Footer from '../footer/footer';

import ProductContext from '../../ProductContext';

import './for-your-pleasure.scss';

class ForYou extends Component {
    static contextType = ProductContext;

    render() {
        const { dataProduct } = this.context;

        const visibleData = dataProduct.slice(0, 6);
        // console.log(dataProduct);
        return (
            <div className="forYou">
                <div className='forYou_pictureBlock'>
                    <Header color='#ffffff' flex='flex-start'/>
                    <img className="forYou_pictureBlock_img" src='for-your-pleasure.png' alt="cup of coffe" />
                    <h2>For your pleasure</h2>
                </div>
                <InfoBlock photo={true} theme='ourGoods'/>
                <span className="ourCoffe_line"></span>
                <ProductList data={visibleData} />
                <Footer color='#000'/>
            </div>
        );
    }
}

export default ForYou;