import React from 'react';
import usePageData from '../../custom-hooks/usePageData';
import RestaurantCard from '../RestaurantCard/RestaurantCard';
import Spinner from '../Spinner/Spinner';

const Restaurants = () => {

  const restaurants = usePageData('partners');

  return (
    <div className='restaurants__cards cards'>
      {restaurants 
        ? restaurants?.map(item => <RestaurantCard key={item.image} {...item}/>)
        : <Spinner />
      }
    </div>
  )
}

export default Restaurants;