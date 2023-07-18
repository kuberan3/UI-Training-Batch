import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";

const Rate = () => {
  const [rate, setRate] = useState(0);

  const [clr, setclr] = useState("");
  const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 60vh;
    font-size: 60px;
    background-color: skyblue;
  `;
  const Radio = styled.input`
    display: none;
  `;
  const Rating = styled.div`
    cursor: pointer;
  `;

  const sample = [
    {
      value: 1,
      color: "#CF0812",
    },
    {
      value: 2,
      color: "#CF0812",
    },
    {
      value: 3,
      color: "#FAAD14",
    },
    {
      value: 4,
      color: "#85BA6A",
    },
    {
      value: 5,
      color: "#013220",
    },
  ];

  return (
    <Container>
      {[...Array(5)].map((item, index) => {
        const givenRating = index + 1;
        return (
          <label>
            <Radio
              type="radio"
              value={givenRating}
              onClick={() => {
                console.log(givenRating);

                setRate(givenRating);
                if (givenRating === 1) {
                  setclr("#CF0812");
                }
                if (givenRating === 2) {
                  setclr("#CF0812");
                }
                if (givenRating === 3) {
                  setclr("#FAAD14");
                }
                if (givenRating === 4) {
                  setclr("#85BA6A");
                }
                if (givenRating === 5) {
                  setclr("#013220");
                }
              }}
            />
            <Rating>
              <FaStar
                color={
                  givenRating < rate || givenRating === rate
                    ? `${clr}`
                    : "#d8dfe1"
                }
              />
            </Rating>
          </label>
        );
      })}
    </Container>
  );
};

export default Rate;
