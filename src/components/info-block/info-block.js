import { Component } from "react";
import Separator from "../separator/separator";
import './info-block.scss';

class InfoBlock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataText: [
                {key: 'home', header: 'About Us', text: `Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.<br><br> Now residence dashwoods she excellent you. Shade being under his bed her, Much read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant horrible but confined day end marriage. Eagerness furniture set preserved far recommend. Did even but nor are most gave hope. Secure active living depend son repair day ladies now.`},
                {key: 'ourBeans', header: 'About our beans', text: `Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.<br><br> Afraid at highly months do things on at. Situation recommend objection do intention so questions.<br> As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.`},
                {key: 'ourGoods', header: 'About our goods', text: `Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.<br><br> Afraid at highly months do things on at. Situation recommend objection do intention so questions.<br> As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.`}
            ]
        }
    }
    render() {
        const data = this.state.dataText.find(item => item.key === this.props.theme);
        const {photo, alt } = this.props;
        
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
            console.log(photo);
            return(
                <section className="infoBlock">
                    <img className="infoBlock_img" src={photo} alt={alt} />
                    <div className="infoBlock_info">
                        <h2>{data.header}</h2>
                        <Separator color="#000" />
                        <p dangerouslySetInnerHTML={{__html: data.text}}></p>
                    </div>
            </section>
            );
        }
        
    }
}

export default InfoBlock;