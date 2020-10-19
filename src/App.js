/** @jsx jsx */
import { jsx, css } from '@emotion/core';
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
      <Countdown />
    </div>
  );
}

export default App;
