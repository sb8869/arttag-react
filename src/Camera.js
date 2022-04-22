import React, { Component } from 'react'
import QrReader from 'modern-react-qr-reader'
import backButton from "./media/back.png";
import { Link } from "react-router-dom";

class Scan extends Component {
  constructor(props){
    super(props)
    this.state = {
      delay: 500,
      result: 'No result',
    }

    this.handleScan = this.handleScan.bind(this)
  }
  handleScan(result){
    if(result){
      this.setState({ result })
      console.log(result);
      let linkToAR = document.querySelector("#link-to-ar")
      linkToAR.innerHTML = `<button id="link-to-ar-button"><a style={{textDecoration: 'none'}} href=${this.state.result}>Tap here</a></button>`
    }
    console.log('no result');
  }
  handleError(err){
    console.error(err)
  }
  render(){
    const previewStyle = {
      marginTop: 40,
      height: 240,
      width: window.innerWidth
    }

    return(
      <div className="gallery-content">
        <div className="header">
          <h1 className="gallery-header"><Link to="/explore"><img src={backButton} alt="backBtn" id="backButton"/></Link>ArtTag</h1>
        </div>
        <QrReader className="qr-image-wrapper"
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
          />
        <div id="link-to-ar" style={{marginTop: '25vh', display: 'flex', justifyContent: 'center', color: 'black'}}></div>
      </div>
    )
  }
}

export default Scan