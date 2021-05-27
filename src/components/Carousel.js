import React, { Component } from 'react'

import {imageData} from '../helpers/imageData'
import "./Carousel.css"

class Carousel extends Component  {

    constructor(props) {
        super(props);
    
        this.state = {
            data: [],
            currentImg: null
        }
    }
    async componentDidMount() {
        let response = await imageData();
        this.setState({
          data: [response],
          currentImg: 1
          })
        }

    render(){
        console.log("logging "+this.state.data)
        return (
            <div className="carousel">
                  {this.state.data.map((postData) => {
                      return(
                        <div className="carousel-inner" style={{backgroundImage: `url(${postData.galleryImages[this.state.currentImg].image.source})`}}>
                            <div className="left"/>
                            <div className="center"/>
                            <div className="right"/>
                           

                        </div>
                      )
                    })}
            </div>
        )
    }
}

export default Carousel
