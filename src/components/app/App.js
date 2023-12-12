import { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductContext from '../../ProductContext';

import Header from '../header/header';
import Separator from '../separator/separator';
import InfoBlock from '../info-block/info-block';
import ProductList from '../product-list/product-list';
import Footer from '../footer/footer';

import './App.scss';

class App extends Component {
    static contextType = ProductContext;
    render() {
        const { dataProduct } = this.context;
        const visibleData = dataProduct ? dataProduct.filter(item => item.best === true) : [];

        return (
            <div className="App">
                <div className='App_firstScreen'>
                    <Header color='#ffffff' flex='flex-start'/>
                    <img src='bg_mainPage.png' alt="bg coffe beans" />
                    <div className='App_firstScreen_info'>
                        <h1>Everything You Love About Coffee</h1>
                        <Separator color='#ffffff'/>
                        <h3>We makes every day full of energy and taste</h3>
                        <h3>Want to try our beans?</h3>
                        <Link to={{pathname: '/our-coffe'}} style={{ textDecoration: 'none' }}>
                            <button type="button">More</button>
                        </Link>
                        
                    </div>
                </div>
                <InfoBlock  photo='' alt='' theme='home'/>
                <div className='App_ourBest'>
                    <img className='App_ourBest_photo' src="paper.png" alt="paper is color - sand" />
                    <h2>Our Best</h2>
                    <ProductList data={visibleData} />
                    {/* <Link to={{pathname: '/product'}} style={{ textDecoration: 'none' }}>
                        
                    </Link>
                    <Link to={{pathname: '/product'}} style={{ textDecoration: 'none' }}>
                        <div className='App_ourBest_card' onClick={() => localStorage.setItem('productId', 10002 ) }>
                            <img src="presto-product.png" alt="package presto coffe" />
                            <h4>Presto Coffee Beans 1 kg</h4>
                            <h5>15.99$</h5>
                        </div>
                    </Link>
                    <Link to={{pathname: '/product'}} style={{ textDecoration: 'none' }}>
                        <div className='App_ourBest_card' onClick={() => localStorage.setItem('productId', 10003 ) }>
                            <img src="aromistico-product.jpg" alt="package aromistico coffe" />
                            <h4>AROMISTICO Coffee 1 kg</h4>
                            <h5>6.99$</h5>
                        </div>
                    </Link> */}
                </div>
                <Footer color='#000'/>
            </div>
        );
    }
}

export default App;
