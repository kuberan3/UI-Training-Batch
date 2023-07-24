import React, { useState } from "react";
import "./App.css";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
const RegistrationForm = () => {
  const [user, setuser] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    location: "",
    rating: 0,
    photo: "https://cdn-icons-png.flaticon.com/512/700/700674.png",
    review: "",
  });
  const [buttonStyle, setButtonStyle] = useState({});

  const handleChange = (e) => {
    if (e.target.name === "name") {
      console.log("name clicked");
      setButtonStyle({
        display: "block",
      });
    }

    setFormData(() => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setuser((prevData) => [...prevData, formData]);
    // setFormData({
    //   name: '',
    //   review: '',
    //   rating: '',
    //   photo:'https://cdn-icons-png.flaticon.com/512/266/266033.png',
    //   location: '',
    // });
    setFormData((prev) => ({
      ...prev,
      name: "",
      review: "",
      rating: "",
      photo: "https://cdn-icons-png.flaticon.com/512/700/700674.png",
      location: "",
    }));
    setButtonStyle({
      display: "none",
    });
  };
  const locationArray = [
    "Select Location",
    "chennai",
    "Bangalore",
    "kerala",
    "villupuram",
  ];
  const ratingArray = ["Review please", 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];

  const handleDelete = (index) => {
    const newData = [...user];
    newData.splice(index, 1);
    setuser(newData);
  };

  const [searching, setsearching] = useState("");
  const [filteredNames, setfilteredNames] = useState([]);

  const filterNames = (array, startingLetter) => {
    console.log(array);
    return array.filter((item) => item.name.startsWith(startingLetter));
  };

  const findUser = (e) => {
    setsearching(e.target.value);
    setfilteredNames(filterNames(user, searching));
  };
  // const handleSearch=()=>{

  // }

  const getStars = (props) => {
    const starIcons = [];

    const roundedRating = Math.round(props * 2) / 2;
    for (let i = 1; i <= 5; i++) {
      if (roundedRating >= i) {
        starIcons.push(<FaStar key={i} color="#B59410" size="20px" />);
      } else if (roundedRating >= i - 0.5) {
        starIcons.push(<FaStarHalfAlt key={i} color="#B59410" size="20px" />);
      } else {
        starIcons.push(<FaRegStar key={i} color="#B59410" size="20px" />);
      }
    }

    return starIcons;
  };
  return (
    <div id="registerMainDiv">
      <div id="formDiv">
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
          />
          <br />
          <label>Location:</label>
          <select
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
          >
            {locationArray.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          <br /> <label>Rating:</label>
          <select
            placeholder="select city"
            id="ratings"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
          >
            {ratingArray.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          <br />
          <label>Review:</label>
          <textarea
            onChange={handleChange}
            type="text"
            name="review"
            id="review"
            value={formData.review}
            placeholder="Review"
          />
          <br />
          <button id="submitBtn" style={buttonStyle} type="submit">
            Submit
          </button>
        </form>
      </div>
      <div>
        <label>search user</label>
        <input
          onChange={(e) => setsearching(e.target.value)}
          placeholder="search"
        ></input>
        {/* <button onClick={() => handleSearch()}>Search user</button> */}

        <div>
          {searching &&
            user
              ?.filter((el) => el?.name?.includes(searching))
              ?.map((item, index) => {
                return (
                  <div id="dataCard">
                    <div>
              <div id="photoDiv">  {item.photo && <img src={item.photo} alt="Uploaded" />}</div>
              </div>
                    <div>
                      <p>Name-{item.name}</p>
                      <p>Lives In- {item.location}</p>
                      <div>Rating - {getStars(item.rating)} </div>
                      <p>Reviews - {item.review}</p>
                      <button
                        id="deleteBtn"
                        onClick={() => handleDelete(index)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
      <hr />
      <div id="personsCardContainer">
        <br />
        {user.map((item, index) => {
          return (
            <div id="dataCard">
              <div>
                <div id="photoDiv">
                  {" "}
                  {item.photo && <img src={item.photo} alt="Uploaded" />}
                </div>
              </div>
              <div>
                <p>Name-{item.name}</p>
                <p>Lives In- {item.location}</p>
                <div>Rating - {getStars(item.rating)} </div>
                <p>Reviews - {item.review}</p>
                <button id="deleteBtn" onClick={() => handleDelete(index)}>
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RegistrationForm;
