import Separator from '../separator/separator';
import Header from '../header/header';
import './footer.scss';

const Footer = (props) => {
    return(
        <footer>
            <Header color={props.color} flex='center'/>
            <Separator color={props.color}/>
        </footer>
    )
} 

export default Footer;