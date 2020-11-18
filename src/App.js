import React from 'react';
import PropTypes from 'prop-types';

function Food({name, picture, rating }){
  
  return ( <div><h2>I like { name }</h2>
  <h4>{rating}/5.0</h4>
    <img src={picture} alt={ name }/></div>
    );
}

const foodILike = [
  {
    id:1,
    name: 'Kimchi',
    image: 'https://m.jnmall.kr/web/product/big/201904/609ee5a2a4bea63000745b65a63f064a.png',
    rating: 5,

  },
  {
    id:2,
    name: 'Samgyeopsal',
    image: 'https://pds.joins.com/news/component/htmlphoto_mmdata/201702/27/117f5b49-1d09-4550-8ab7-87c0d82614de.jpg',
    rating: 4.9
  },
  {
    id:3,
    name: 'Bibimbap',
    image: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/10/03/355b5cd5c3beb1a775c82ee425dcd1931.jpg',
    rating: 2.1
  }

];

function App() {
  return (
    <div>
      {foodILike.map(dish => (<Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>))}
      

      

      </div>
    );
}
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};


export default App;
