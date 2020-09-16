/** @jsx jsx */
import { jsx, css, Global, ClassNames } from '@emotion/core';
import React, { useState, useEffect } from 'react';
//import moment from 'moment';

const OuterWrapperStyle = css`
  /* margin: auto;
  width: 80%;
  border: 1px solid white; */
`;
const InnerWrapperStyle = css`
  font-size: 2.5em;
  color: green;
  width: 5%;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 2em;
  text-align: center;
  display: inline-block;
  justify-content: center;
  border-radius: 5px;
`;

const AmountStyle = css`
display: inline-block
  margin: 0;
  padding: 20px;
  text-align: left;
  padding-left:0; 
`;

const UnitStyle = css`
display: inline-block;
  margin; 0;
  padding: 20px;
  text-align: left;
  padding-left: 0;
`;

export default function Countdown(props) {
  //calculate the remaining days until end of the year i.e. current year +1
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    let difference = +new Date(`01/01/${year + 1}`) - +new Date();
    let timeLeft = {};
    // from the difference in ms to the target date, calculate days, hours, minutes and seconds
    //creates and object
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  // assign state with timeLeft object
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  // every 1s update TimeLeft
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((time) => calculateTimeLeft());
    }, 1000);
  });

  //pass timeLeft as props and map over object.keys of timeLeft to create jsx elements displaying amount and units
  function ValuesTimeLeft(props) {
    let daysHoursMinutesSecondLeft = Object.keys(props.timeLeft).map((key) => {
      return (
        <div css={InnerWrapperStyle}>
          <div css={AmountStyle}>{props.timeLeft[key]}</div>
          <div css={UnitStyle}>{key}</div>
        </div>
      );
    });
    return <div>{daysHoursMinutesSecondLeft}</div>;
  }

  //passing the timeLEft state as props here
  return (
    <div css={OuterWrapperStyle}>
      <ValuesTimeLeft timeLeft={timeLeft} />
    </div>
  );
}
