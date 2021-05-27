import React, { Component } from 'react'

import {imageData} from '../helpers/imageData'

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import "./Carousel.css"

class Carousel extends Component  {

  
    
    state = {
        data: [],
        currentImg: 0,
        clickedimg: 0,
        isActive: null
    }

    async componentDidMount() {
        let response = await imageData();
        this.setState({
          data: [response],
          })
        }

    handleLeftClick = (e) => {
        if (this.state.currentImg > 0){
            this.setState({
                currentImg: this.state.currentImg-1,
            })
        }
    }
    handleRightClick = (e) => {
        let totalImages ;
        this.state.data.map((postData)=>{
            totalImages = postData.galleryImages.length
        })

        if (this.state.currentImg < totalImages-1){
            this.setState({
                currentImg: this.state.currentImg+1,
            })
        }
    }

    handleThumbailClick = (e) => {      
        this.setState({
            currentImg: e.target.id,
            isActive: e.target.id,
        })
    }


    render(){
        return (
            <div className="carousel">
                  {this.state.data.map((postData, index) => {
                      return(
                        <div key={index} className="carousel-inner" style={{backgroundImage: `url(${postData.galleryImages[this.state.currentImg].image.source})`}}>
                            <div className="left" onClick={this.handleLeftClick}>
                                <ArrowBackIosIcon style={{fontSize: 30}}/>
                            </div>
                            <div className="center">
                                <h1>{postData.galleryImages[this.state.currentImg].name}</h1>
                            </div>
                            <div className="right" onClick={this.handleRightClick}>
                                <ArrowForwardIosIcon style={{fontSize: 30}}/>
                            </div>
                        </div>
                        
                      )
                    })}
                    <div className="thumbnail-container">
                        {this.state.data.map((postData) =>{  
                            return(
                            postData.galleryImages.map(((img, index )=> {
                                return(
                                    <div key={index} className="thumbnails">
                                    <img id={index} className={this.state.isActive === index ? "selected" : null } key={index} src={img.image.source} alt={img.image.alt} onClick={this.handleThumbailClick}></img>
                                </div>
                                )
                            }))
                            )
                        })}
                    </div>
            </div>
        )
    }
}

export default Carousel
