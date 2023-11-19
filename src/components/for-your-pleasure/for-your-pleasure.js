import { Component } from 'react';

import Header from '../header/header';
import InfoBlock from '../info-block/info-block';
import Footer from '../footer/footer';

import './for-your-pleasure.scss';

class ForYou extends Component {

    render() {
        return (
            <div className="forYou">
                <div className='forYou_pictureBlock'>
                    <Header color='#ffffff' flex='flex-start'/>
                    <img className="forYou_img" src='for-your-pleasure.png' alt="cup of coffe" />
                </div>
                <InfoBlock photo='ourGoods.png' alt='cup of coffe' theme='ourGoods'/>
                <span className="ourCoffe_line"></span>
                <Footer color='#000'/>
            </div>
        );
    }
}

export default ForYou;