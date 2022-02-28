import React from 'react';
import ReviewsList from '../ReviewsList/ReviewsList';
import About from './About/About';
import Terms from './Terms/Terms';
import PhotoCollage from './PhotoCollage/PhotoCollage';
import Questions from './Questions/Questions';
import { MapsApi } from '../MapsApi/MapsApi';

function Home(props) {
  return (
    <div>
      <p>Здесь будет домашняя страница, включающая в себя другие компоненты</p>
      <About/>
      <PhotoCollage/>
      <ReviewsList/>
      <Terms/>
      <Questions/>
      <MapsApi />
    </div>
  );
}

export default Home;
