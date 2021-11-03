import * as React from 'react';
import Typeography from '@mui/material/Typography';


export enum HEADING_SIZE {
  heading_large = 'h2',
  heading_medium = 'h4',
  heading_small = 'h6',
}

interface HEADING_PROPS {
  text: string;
  size?: HEADING_SIZE;
}

function Heading(props: HEADING_PROPS) {
  let generatedHeading: JSX.Element;

  switch (props.size) {
    case HEADING_SIZE.heading_large:
      generatedHeading = (
        <Typeography variant={HEADING_SIZE.heading_large} component="div">
          {props.text}
        </Typeography>
      );
      break;
    case HEADING_SIZE.heading_medium:
      generatedHeading = (
        <Typeography variant={HEADING_SIZE.heading_medium} component="div">
          {props.text}
        </Typeography>
      );
      break;
    case HEADING_SIZE.heading_small:
      generatedHeading = (
        <Typeography variant={HEADING_SIZE.heading_small} component="div">
          {props.text}
        </Typeography>
      );
      break;
    default:
      generatedHeading = (
        <Typeography variant={HEADING_SIZE.heading_medium} component="div">
          {props.text}
        </Typeography>
      );
      break;
  }

  return generatedHeading;
}

export default Heading;
