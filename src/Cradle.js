import {Component} from 'react';
import './css/cradle.css'

class Cradle extends Component {
    render(){
        return(
            <div className="cradle">
           
            <div className="floor"></div>
            <div className="wood base">
                <div class="left"></div>
                <div class="right"></div>
                <div class="front"></div>
                <div class="back"></div>
                <div className="top">
                    <div className="shadow"></div>
                    <div className="shadow"></div>
                    <div className="shadow"></div>
                    <div className="shadow"></div>
                    <div className="shadow"></div>
                </div>
            </div>
            <div className="wood poll">
            </div>
            <div className="wood poll">
            </div>
            <div className="wood poll">
            </div>
            <div className="wood poll">
            </div>
            <div className="wood strecher">
            </div>
            <div className="wood strecher">
            </div>

            <div className="ballPlate">
                <div className="ballWrapper">
                <div className="ball"></div>
                </div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <div className="ballPlate">
                <div className="ballWrapper">
                <div className="ball"></div>
                </div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <div className="ballPlate">
                <div className="ballWrapper">
                <div className="ball"></div>
                </div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <div className="ballPlate">
                <div className="ballWrapper">
                <div className="ball"></div>
                </div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <div className="ballPlate">
                <div className="ballWrapper">
                <div className="ball"></div>
                </div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <div className="text">
                {this.props.text}
            </div>
            </div>
        )
    }
}

export default Cradle;
