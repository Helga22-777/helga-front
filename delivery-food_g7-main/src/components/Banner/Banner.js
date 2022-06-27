import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {

  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false
  };

  return (
    <div className='container-promo swiper'>
      <div className='swiper-wrapper'>
        <Slider {...settings}>
          <section className='swiper-slide promo pizza'>
            <h1 className="promo-title">Онлайн-сервис <br/>доставки еды на дом</h1>
            <p className='promo-text'>
              Блюда из любимого ресторана привезет курьер в перчатках, маске и с антисептиком
            </p>
          </section>

          <section className='swiper-slide promo kebab'>
            <h1 className="promo-title">Шашлыки на майские <br/> со скидкой 35%</h1>
            <p className='promo-text'>
              Закажите шашлыки в любом ресторане до 10 мая и получите скидку по промокоду OMAGAD
            </p>
          </section>

          <section className='swiper-slide promo vegetables'>
            <h1 className="promo-title">Скидка 20% на всю еду <br/> по промокоду LOVE.JS</h1>
            <p className='promo-text'>
              Блюдо из ресторана привезут вместе с двумя подарочными книгами по фронтенду
            </p>
          </section>

          <section className='swiper-slide promo sushi'>
            <h1 className="promo-title">Сеты со скидкой до 30% <br/> в ресторанах</h1>
            <p className='promo-text'>
              Скидки на сеты до 30 мая по промокоду DADADA
            </p>
          </section>
        </Slider>
      </div>
    </div>
  )
}

export default Banner;