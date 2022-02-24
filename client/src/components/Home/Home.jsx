import React from 'react';
import ReviewsList from '../ReviewsList/ReviewsList';
import About from './About/About';
import PhotoCollage from './PhotoCollage/PhotoCollage';

function Home(props) {
  return (
    <div>
      <p>Здесь будет домашняя страница, включающая в себя другие компоненты</p>
      <About/>
      <PhotoCollage/>
      <ReviewsList/>
    </div>
  );
}

export default Home;
