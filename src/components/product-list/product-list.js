import { Component } from 'react';
import { Link } from 'react-router-dom';

import './product-list.scss';

class ProductList extends Component {
    
    render() {
        const cards = this.props.data.map(card => {
            const { key, photo, name, country, price } = card;
            // console.log(name);
            return(
                <Link key={key} to={{pathname: '/product'}} style={{ textDecoration: 'none' }}>
                    <div className='productList_card' onClick={() => localStorage.setItem('productId', key )}>
                        <div className='productList_card_photo'>
                            <img src={photo} alt={name} />
                        </div>
                        <h4>{name}</h4>
                        <h4>{country}</h4>
                        <h5>{price}</h5>
                    </div>
                </Link>
            )
        })

        return(
            <section className='productList'>
                {cards}
            </section>
        )
    }
}

export default ProductList;