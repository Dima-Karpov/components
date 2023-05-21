import React from 'react';
import {GridContainer, Tooltip, GridComponent, Spinner} from "./components";

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

            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '100px'}}>
                <Tooltip text="Click me!" position="right">
                    <button>Hover me</button>
                </Tooltip>
            </div>


            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Tooltip text="I'm a tooltip!" position="left">
                    <p style={{color: 'red'}}>Hover me too</p>
                </Tooltip>
            </div>
            
            
            <Spinner/>
            <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='#E2E8F0'
                color='#3182ce'
                size="xl"
            />

        </>

    );
}

export default App;
