/** @jsx jsx */
import { jsx, css, Global, ClassNames } from '@emotion/core';
import React from 'react';
import Countdown from './Countdown';

const Heading = css`
  font-size: 3em;
  padding: 1em;
  font-family: Verdana, sans-serif;
  text-align: left;
  position: relative;
  left: 30px;
`;

function App() {
  let year = new Date().getFullYear();
  return (
    <div>
      <div css={Heading}>Hang in there! Even {year} will pass! </div>
      <Countdown
        timeTillDate={'01 01 2021T00:00:00 am'}
        timeFormat={'MM DD YYYYThh:mm:ss a'}
      />
    </div>
  );
}


export default App;
