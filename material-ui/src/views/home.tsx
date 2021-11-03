import * as React from 'react';
import Heading, { HEADING_SIZE } from './widgets/heading';

function Home() {
  return (
    <div>
      <Heading size={HEADING_SIZE.heading_large} text=" this is heading text" />
      <Heading
        size={HEADING_SIZE.heading_medium}
        text=" this is heading text"
      />
      <Heading size={HEADING_SIZE.heading_small} text=" this is heading text" />
    </div>
  );
}

export default Home;
