import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";





class App extends Component {
    handleImageLoad(event) {
        console.log('Image loaded ', event.target)
    }

    render() {
      const images = [
          {
              original: 'http://lorempixel.com/1000/600/nature/1/',
              thumbnail: 'http://lorempixel.com/250/150/nature/1/',
          },
          {
              original: 'http://lorempixel.com/1000/600/nature/2/',
              thumbnail: 'http://lorempixel.com/250/150/nature/2/'
          },
          {
              original: 'http://lorempixel.com/1000/600/nature/3/',
              thumbnail: 'http://lorempixel.com/250/150/nature/3/'
          }
      ]
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <ImageGallery
              items={images}
              slideInterval={2000}
              onImageLoad={this.handleImageLoad}/>

      </div>
    );
  }
}

export default App;
