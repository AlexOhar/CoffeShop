import { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from '../header/header';
import Separator from '../separator/separator';
import InfoBlock from '../info-block/info-block';
import Footer from '../footer/footer';

import './App.scss';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header color='#ffffff' flex='flex-start'/>
                <img src='bg_mainPage.png' alt="bg coffe beans" />
                <div className='App_info'>
                    <h1>Everything You Love About Coffee</h1>
                    <Separator color='#ffffff'/>
                    <h3>We makes every day full of energy and taste</h3>
                    <h3>Want to try our beans?</h3>
                    <button type="button">More</button>
                </div>
                <InfoBlock  photo='' alt='' theme='home'/>
                <div className='App_ourBest'>
                    <img src="paper.png" alt="paper is color - sand" />
                    <h2>Our Best</h2>
                    <Link to={{pathname: '/product'}} style={{ textDecoration: 'none' }}>
                        <div className='App_ourBest_card' onClick={() => localStorage.setItem('productId', 10001 )}>
                            <img src="https://s3-alpha-sig.figma.com/img/b8a2/cd1c/51ba743751d995fdce4bd5d988619433?Expires=1701043200&Signature=mCyYAiDD9AbmwnTJA4DgDJf6XeS5~kM-yytoEzD4C9Rb~38IpNlEv6TijIM~BG4tY06meCm1yFnsIvH7hZ-0z44I93J1dwWM9cR~9qXkdUq4JpBr2rU84G04eJ4Cmp5DbgXRADowCyC-pM79CA-lS-FWod-mRSCsc2VIHUpe1aTs4Cd7EsLJLvlN6pK9cAW7xE2go4di-R3W0JGY0SRLMdJQqtC~QGJzpXMppNByzHVRpITd3brKzENi1y9kJRtzI~N8OGBjM9Dh0ejh72gf-ZyGaWMVUIBFE7cVvWKI-ZAVwpVnPASOVPnFm5Q8OTHS5394CgX9Nx4HoeDP4d~oYw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="package solimo coffe" />
                            <h4>Solimo Coffee Beans 2 kg</h4>
                            <h5>10.73$</h5>
                        </div>
                    </Link>
                    <Link to={{pathname: '/product'}} style={{ textDecoration: 'none' }}>
                        <div className='App_ourBest_card' onClick={() => localStorage.setItem('productId', 10002 ) }>
                            <img src="https://s3-alpha-sig.figma.com/img/16dd/4342/f1a24fa2774035900f1c542555bd50d2?Expires=1701043200&Signature=ppzeZbnFfBPmT4ctZY8~radafcjkEUb4AijGOlzJFIynV58PU0pMQnj85xVLLw4cm2fo20hrRRnoD1JydRnX9z~SNdHW65~QOVcJLZis0qk-~dpULjwvj5PW04cdIeZqgPnaeSDqjrJrJNb6Y3~5c3lAYy9lw2kWHWu~reAVS51kcJzBaoBJHHiuqKXDuaO~lUkmUu4p212S23oSMTJCQiZqwA3trzlPerAxVq82tkOdeyn7txA8Bhw~87yMAeaC2SJFf98HGDYT0srzkSnb-hSNxVFNEo01xH49oMqFzFowWg7AevaDZu29OhOBpcVkpnnfcZrJq6OWENptZSqy7w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="package presto coffe" />
                            <h4>Presto Coffee Beans 1 kg</h4>
                            <h5>15.99$</h5>
                        </div>
                    </Link>
                    <Link to={{pathname: '/product'}} style={{ textDecoration: 'none' }}>
                        <div className='App_ourBest_card' onClick={() => localStorage.setItem('productId', 10003 ) }>
                            <img src="https://s3-alpha-sig.figma.com/img/fab6/a1ff/d821960801d00e7476bcc3d424ae62de?Expires=1701043200&Signature=gXgWjs9SHvZeW~LarYkMA26kjdSgckATn0WIC~vjJNGFvl0r4jL62OHRsBvNyWLp4kf83Sgmq7FGNOjayuM~NXc0oAJaB1f5DAR7~MkWnQdIr3tUbkM2-k6F2tv9wlk60mafa9BEFOR~ANF4TImaarUA7THg335z8EbOg3St7ykrIeXHoUa-SucQiGeNluRp5S83uBYzo9nENtRZCQt08BDCvjOYK49rrhkO1K6DtgOI22hL4iUqpJeK4PPLH5QfTi9DTRta7Mm6VFsx1X1h1IQASngRnMchcZDF4zcCGWDq0664Aie~tr6SYcJFTWKwx3CJjZ5iO5IHb-tAxx6fdg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="package aromistico coffe" />
                            <h4>AROMISTICO Coffee 1 kg</h4>
                            <h5>6.99$</h5>
                        </div>
                    </Link>
                </div>
                <Footer color='#000'/>
            </div>
        );
    }
}

export default App;
