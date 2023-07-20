
import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const StarRating = (props) => {
  let rating=props.rate
  const getStars = () => {
    const starIcons = [];
    const roundedRating = rating
    for (let i = 1; i <= 5; i++) {
      if (roundedRating >= i) {
        starIcons.push(<FaStar key={i} color='yellow' size="50px"/>);
      } else if (roundedRating >= i - 0.5) {
        starIcons.push(<FaStarHalfAlt key={i} color='yellow' size="50px"/>);
      } else {
        starIcons.push(<FaRegStar key={i} color='yellow' size="50px"/>);
      }
    }

    return starIcons;
  };

  return <div>{getStars()}</div>;
};

export default StarRating;
