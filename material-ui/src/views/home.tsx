import * as React from 'react';
import NavBar from './widgets/navbar';
import Heading, { HEADING_SIZE } from './widgets/heading';

function Home() {
  return (
    <div>
      <NavBar />
      <Heading size={HEADING_SIZE.heading_large} text=" this is heading text" />
      <Heading
        size={HEADING_SIZE.heading_medium}
        text=" this is heading text 2"
      />
      <Heading size={HEADING_SIZE.heading_small} text=" this is heading text" />
    </div>
  );
}

export default Home;
