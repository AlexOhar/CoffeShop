import { Component } from 'react';

import Header from '../header/header';

import './product.scss';

class Product extends Component {

    render() {
        if (this.props.location && this.props.location.state) {
            const { id, name } = this.props.location.state;
            console.log(id, name);
        }
        console.log(localStorage.getItem('productId'));
        return (
            <div className="forYou">
                <Header color='#ffffff' flex='flex-start'/>
                <img src='our-coffe.png' alt="shelfs with coffe packages" />
            
            </div>
        );
    }
}

export default Product;