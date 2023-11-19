import { Component } from 'react';

import Header from '../header/header';
import InfoBlock from '../info-block/info-block';

import Footer from '../footer/footer';

import './our-coffe.scss';

class OurCoffe extends Component {

    render() {
        return (
            <div className="ourCoffe">
                <div className='ourCoffe_pictureBlock'>
                    <Header color='#ffffff' flex='flex-start'/>
                    <img className="ourCoffe_img" src='our-coffe.png' alt="shelfs with coffe packages" />
                </div>
                <InfoBlock photo='about-our-beans.jpg' alt='girl drink coffe' theme='ourBeans'/>
                <span className="ourCoffe_line"></span>
                <Footer color='#000'/>
            </div>
        );
    }
}

export default OurCoffe;