import React from 'react';
import { Spinner } from './components';

function App() {
  return (
    <>
      <Spinner />
      <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='#E2E8F0'
        color='#3182ce'
        size='xl'
      />
    </>
  );
}

export default App;
