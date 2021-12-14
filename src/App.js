import MapList from "./MapList";
import WelcomeInfo from "./WelcomeInfo";
import * as constants from "./data";
import React from 'react';

function App() {
  return (
    <div className="buttonContainer">
      <WelcomeInfo weddingData={constants.weddingData} />
      <MapList />
    </div>
  );
}

export default App;