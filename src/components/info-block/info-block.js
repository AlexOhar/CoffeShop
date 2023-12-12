import { Component } from "react";
import Separator from "../separator/separator";
import './info-block.scss';

class InfoBlock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataText: [
                {key: 'home', header: 'About Us', text: `Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.<br><br> Now residence dashwoods she excellent you. Shade being under his bed her, Much read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant horrible but confined day end marriage. Eagerness furniture set preserved far recommend. Did even but nor are most gave hope. Secure active living depend son repair day ladies now.`},
                {key: 'ourBeans', photo: 'about-our-beans.jpg',  alt: 'girl drink coffe', header: 'About our beans', text: `Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.<br><br> Afraid at highly months do things on at. Situation recommend objection do intention so questions.<br> As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.`},
                {key: 'ourGoods', photo: 'ourGoods.png', alt: "cup of coffe", header: 'About our goods', text: `Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.<br><br> Afraid at highly months do things on at. Situation recommend objection do intention so questions.<br> As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.`},
                {key: '10000', photo: 'aromistico-brasil.jpg', alt: "package of coffe", header: 'About it', text: `<span style="font-weight: bold;">Country:</span> Brasil<br><br> <span style="font-weight: bold;">Description:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br><br> <span style="font-weight: bold;">Price:</span><b> <span style="font-size: 24px;">16.99$</span>`}
            ]
        }
    }
    render() {
        const data = this.state.dataText.find(item => item.key === this.props.theme);
        const { photo, textAlign } = this.props;
        
        if (!photo) {
            return(
                <section className="infoBlock">
                    <div className="infoBlock_info">
                        <h2>{data.header}</h2>
                        <Separator color="#000" />
                        <p dangerouslySetInnerHTML={{__html: data.text}}></p>
                    </div>
                </section>
            );
        } else {
            // console.log(data.photo);
            return(
                <section className="infoBlock">
                    <img className="infoBlock_img" src={data.photo} alt={data.alt} />
                    <div className="infoBlock_info">
                        <h2>{data.header}</h2>
                        <Separator color="#000" />
                        <p  style={{textAlign: textAlign }} dangerouslySetInnerHTML={{__html: data.text}}></p>
                    </div>
                </section>
            );
        }
        
    }
}

export default InfoBlock;