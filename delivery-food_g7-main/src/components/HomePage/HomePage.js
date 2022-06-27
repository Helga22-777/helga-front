import React from 'react';
import Banner from '../Banner/Banner';
import Restaurants from '../Restaurants/Restaurants';

const HomePage = () => {

  return(
    <section className='restaurants'>
      <Banner />
      <Restaurants />
    </section>
  )
}

export default HomePage;