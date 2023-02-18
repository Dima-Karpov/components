import React from 'react';
import {GridContainer, GridComponent} from "./components";

function App() {
  return (
      <>
      <GridContainer columns="repeat(3, 1fr)" gap="20px">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
        <div>Item 5</div>
        <div>Item 6</div>
        <div>Item 7</div>
        <div>Item 8</div>
        <div>Item 9</div>
        <div>Item 10</div>
      </GridContainer>

    <GridComponent>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
        <div>Item 5</div>
        <div>Item 6</div>
        <div>Item 7</div>
        <div>Item 8</div>
        <div>Item 9</div>
        <div>Item 10</div>
    </GridComponent>
      </>

  );
}

export default App;
