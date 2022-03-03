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
import ServicesList from '../ServicesList/ServicesList';
import Galeria from '../Galeria/Galeria';


function Home(props) {
  return (
    <div>
      <ImageMain/>
      <div className="app-container">
      <About/>
      <Galeria/>
      </div>
      {/* <PhotoCollage/> */}
      {/* <PhotoSlider/> */}
      <div className="app-container">
      <ServicesList/>
      <ReviewsList/>
      <Terms/>      
      <Questions/>
      <MapsApi />

      </div>
    </div>
  );
}

export default Home;
