import { Component } from 'react';

import Header from '../header/header';
import InfoBlock from '../info-block/info-block';
import Filter from '../filter/filter';
import ProductList from '../product-list/product-list';

import ProductContext from '../../ProductContext';

import Footer from '../footer/footer';

import './our-coffe.scss';

class OurCoffe extends Component {
    static contextType = ProductContext;
    constructor(props) {
        super(props);
        this.state = {
            dataProducts: [
                {key: 1, photo: 'aromistico-product.jpg', name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99$', best: true, text: `<span style="font-weight: bold;">Description:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`},
                {key: 2, photo: 'aromistico-product.jpg', name: 'AROMISTICO Coffee 1 kg', country: 'Kenya', price: '6.99$', best: false, text: `<span style="font-weight: bold;">Description:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`},
                {key: 3, photo: 'aromistico-product.jpg', name: 'AROMISTICO Coffee 1 kg', country: 'Columbia', price: '6.99$', best: false, text: `<span style="font-weight: bold;">Description:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`},
                {key: 4, photo: 'aromistico-product.jpg', name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '8.99$', best: false, text: `<span style="font-weight: bold;">Description:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`},
                {key: 5, photo: 'aromistico-product.jpg', name: 'AROMISTICO Coffee 1 kg', country: 'Kenya', price: '9.99$', best: false, text: `<span style="font-weight: bold;">Description:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`},
                {key: 6, photo: 'aromistico-product.jpg', name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99$', best: false, text: `<span style="font-weight: bold;">Description:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`},
                {key: 7, photo: 'presto-product.png', name: 'Presto Coffee Beans 1 kg', country: 'Kenya', price: '16.99$', best: true, text: `<span style="font-weight: bold;">Description:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`},
                {key: 8, photo: 'presto-product.png', name: 'Presto Coffee Beans 1 kg', country: 'Columbia', price: '14.99$', best: false, text: `<span style="font-weight: bold;">Description:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`},
                {key: 9, photo: 'presto-product.png', name: 'Presto Coffee Beans 1 kg', country: 'Brazil', price: '15.99$', best: false, text: `<span style="font-weight: bold;">Description:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`},
                {key: 10, photo: 'solimo-product.jpg', name: 'Solimo Coffee Beans 2 kg', country: 'Kenya', price: '10.69$', best: true, text: `<span style="font-weight: bold;">Description:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`},
                {key: 11, photo: 'solimo-product.jpg', name: 'Solimo Coffee Beans 2 kg', country: 'Brazil', price: '26.99$', best: false, text: `<span style="font-weight: bold;">Description:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`},
                {key: 12, photo: 'solimo-product.jpg', name: 'Solimo Coffee Beans 2 kg', country: 'Kenya', price: '19.49$', best: false, text: `<span style="font-weight: bold;">Description:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`},
                {key: 13, photo: 'solimo-product.jpg', name: 'Solimo Coffee Beans 2 kg', country: 'Brazil', price: '17.49$', best: false, text: `<span style="font-weight: bold;">Description:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`},
            ],
            filter: 'all',
            term: ''
        }
    }
    
    onFilterSelect = (filter) => {
        // console.log(filter);
        this.setState({filter});
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'Brazil':
                return items.filter(item => item.country === 'Brazil');
            case 'Kenya':
                return items.filter(item => item.country === 'Kenya');
            case 'Columbia':
                return items.filter(item => item.country === 'Columbia');
            case 'All':
                return items
            default:
                return items
        }
    }

    componentDidMount() {
        const { setDataProduct } = this.context;
        const { dataProducts } = this.state;

        setDataProduct(dataProducts);
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        } 
        
        const lowerTerm = term.toLowerCase();
        return items.filter(item => {
            return item.name.toLowerCase().indexOf(lowerTerm) > -1 || item.country.toLowerCase().indexOf(lowerTerm) > -1;
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    render() {
        const { dataProducts, filter, term } = this.state;
        const visibleData = this.filterPost(this.searchEmp(dataProducts, term), filter);
        // console.log(visibleData);

        return (
            <div className="ourCoffe">
                <div className='ourCoffe_pictureBlock'>
                    <Header color='#ffffff' flex='flex-start'/>
                    <img className="ourCoffe_pictureBlock_img" src='our-coffe.png' alt="shelfs with coffe packages" />
                    <h2>Our Coffee</h2>
                </div>
                <InfoBlock photo={true} theme='ourBeans'/>
                <span className="ourCoffe_line"></span>
                <Filter filter={filter} onFilterSelect={this.onFilterSelect} onUpdateSearch={this.onUpdateSearch}/>
                <ProductList data={visibleData} />
                <Footer color='#000'/>
            </div>
        );
    }
}

export default OurCoffe;