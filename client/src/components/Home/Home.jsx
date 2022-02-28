import React from 'react';
import ReviewsList from '../ReviewsList/ReviewsList';
import About from './About/About';
import Terms from './Terms/Terms';
import PhotoCollage from './PhotoCollage/PhotoCollage';
import Questions from './Questions/Questions';
import Parallax from './Parallax/Parallax';
import { MapsApi } from '../MapsApi/MapsApi';
import './Home.css'
import PhotoSlider from './PhotoSlider/PhotoSlider';
import { WeatherApi } from '../WeatherApi/WeatherApi'


function Home(props) {
  return (
    <div>
      <Parallax/>
      <div className="app-container">
      <About/>
      </div>
      <PhotoCollage/>
      <PhotoSlider/>
      <div className="app-container">
      <ReviewsList/>
      <Terms/>
      <Questions/>
      <MapsApi />

      </div>
      <WeatherApi />
    </div>
  );
}

export default Home;
