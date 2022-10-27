import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Memory.css";
import { addStep, hideCard, showCard } from "./memorySlice";

const Memory = () => {
  const data = useSelector((state) => state.memory);
  const dispatch = useDispatch();

  const [previousCardIndex, setPreviousCardIndex] = useState(-1);
  const [correctGuess, setCorrectGuess] = useState(0);

  const handleClick = (index) => {
    dispatch(showCard(index));
    if (data.data[index].isRotated) {
      return;
    }

    if (previousCardIndex === -1) {
      setPreviousCardIndex(index);
      return;
    } else {
      dispatch(addStep());
      if (
        data.data[index].matchNumber ===
        data.data[previousCardIndex].matchNumber
      ) {
        setPreviousCardIndex(-1);
        setCorrectGuess(correctGuess + 1);
      } else {
        setTimeout(() => {
          dispatch(hideCard(index));
          dispatch(hideCard(previousCardIndex));
        }, 500);
        setPreviousCardIndex(-1);
      }
    }
  };
  console.log(data);
  return (
    <div className="Memory">
      <h1>Flip - O - Mania</h1>
      <div className="row">
        <h2>Flips made : {data.numberOfFlips}</h2>
        <h2>Correct Guesses : {correctGuess} / 6</h2>
      </div>
      {correctGuess === 6 ? (
        <div className="victory">
          <img src="https://cdn.dribbble.com/users/2983604/screenshots/8140241/media/d0905a1fd24438a96a158b355a72d0b8.gif" alt="" />
          <h2>Yay, You Won!!</h2>
          <img src="https://cdn.dribbble.com/users/2983604/screenshots/8140241/media/d0905a1fd24438a96a158b355a72d0b8.gif" alt="" />
        </div>
      ) : (
        <div className="cardArea">
          {data.data.map((item, index) => (
            <div
              className="flip-card"
              key={index}
              onClick={() => handleClick(index)}
            >
              <div
                className="flip-card-inner"
                style={{ transform: item.isRotated ? "rotateY(180deg)" : "" }}
              >
                <div className="flip-card-front">
                  <img
                    src="https://media3.giphy.com/media/xTiN0IuPQxRqzxodZm/giphy.gif"
                    alt=" "
                  />
                </div>
                <div className="flip-card-back">
                  <img src={item.image} alt=" " />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Memory;
