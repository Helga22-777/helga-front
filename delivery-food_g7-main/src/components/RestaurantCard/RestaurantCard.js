import React from 'react';

const RestaurantCard = (props) => {

  const {
    name,
    image,
    stars,
    price,
    kitchen,
    products,
    time_of_delivery
  } = props;

  const img = require(`../../assets/${image}`);

  return (
    <div className='card card-restaurant'>
      <img src={img} alt="image" className='card-image'/>
      <div className='card-text'>
        <div className='card-heading'>
          <h3 className='card-title'>{name}</h3>
          <span className='card-tag tag'>{time_of_delivery}</span>
        </div>
        <div className='card-info'>
          <div className='rating'>{stars}</div>
          <div className='price'>От ${price}</div>
          <div className='category'>{kitchen}</div>
        </div>
      </div>
    </div>
  )
}

export default RestaurantCard;