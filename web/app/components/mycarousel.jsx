import React from 'react'
import {Carousel} from 'react-bootstrap';

export default class MyCarousel extends React.Component{
    render(){
        return(
            <Carousel>
                <Carousel.Item>
                    <img className="carousel" src="https://s1-ssl.dmcdn.net/fVpEH/1280x720-nQy.jpg"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="carousel" src="https://i.ytimg.com/vi/PD1E_t3ifx0/maxresdefault.jpg"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="carousel" src="http://s2.dmcdn.net/gI9JN/1280x720-Ac1.jpg"/>
                </Carousel.Item>
            </Carousel>
        );
    }
}