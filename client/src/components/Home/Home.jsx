import React from 'react';
import ReviewsList from '../ReviewsList/ReviewsList';
import About from './About/About';
import Terms from './Terms/Terms';
import Questions from './Questions/Questions';
import { MapsApi } from '../MapsApi/MapsApi';
import './Home.css'
import ImageMain from '../ImageMain/ImageMain';
import ServicesList from '../ServicesList/ServicesList';
import Galeria from '../Galeria/Galeria';
import MyAccordion from '../MyAccordion/MyAccordion';


function Home(props) {
  return (
    <div>
      <ImageMain/>
      <div className="app-container">
      <About/>
      <Galeria/>
      </div>
      <div className="app-container">
      <ServicesList/>
      <ReviewsList/>
      <Terms/>      
      {/* <Questions/> */}
      <MyAccordion/>
      <MapsApi />

      </div>
    </div>
  );
}

export default Home;
