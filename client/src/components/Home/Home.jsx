import React from 'react';
import ReviewsList from '../ReviewsList/ReviewsList';
import About from './About/About';
import Terms from './Terms/Terms';
import PhotoCollage from './PhotoCollage/PhotoCollage';
import Questions from './Questions/Questions';
import { MapsApi } from '../MapsApi/MapsApi';
import './Home.css'
import PhotoSlider from './PhotoSlider/PhotoSlider';
import ImageMain from '../ImageMain/ImageMain';


function Home(props) {
  return (
    <div>
      <ImageMain/>
      <div className="app-container">
      <About/>
      </div>
      <PhotoCollage/>
      {/* <PhotoSlider/> */}
      <div className="app-container">
      <ReviewsList/>
      <Terms/>      
      <Questions/>
      <MapsApi />

      </div>
    </div>
  );
}

export default Home;
