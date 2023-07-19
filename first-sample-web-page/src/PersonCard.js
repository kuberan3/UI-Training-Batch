import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const PersonCard = ({ data }) => {
    console.log(data)
    const getStars = () => {
        const starIcons = [];
        const roundedRating = Math.round(data.rating * 2) / 2; 
        for (let i = 1; i <= 5; i++) {
          if (roundedRating >= i) {
            starIcons.push(<FaStar key={i} color='yellow' size="50px"/>);
          } else if (roundedRating >= i - 0.5) {
            starIcons.push(<FaStarHalfAlt key={i} color='yellow' size="50px"/>);
          } else {
            starIcons.push(<FaRegStar key={i} color='black' size="50px"/>);
          }
        }
    
        return starIcons;
      };
  return (
    <div>
      <h2>Displaying Form Data</h2>
      {data ? (
        <div>
            <div id="photoDiv">     {data.photo && <img src={data.photo} alt="Uploaded" />}</div>
         
          <p>Name: {data.name}</p>
          <p>Email: {data.email}</p>
         
         <p>Date Of Birth: {data.DoB}</p>
          
          <p>Name: {data.mobile}</p>
          <div> {getStars()} </div>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default PersonCard;
