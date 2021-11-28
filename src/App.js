import MapList from "./MapList";
import WelcomeInfo from "./WelcomeInfo";
import * as constants from "./data";

function App() {
  return (
    <div className="App">
      <WelcomeInfo weddingData={constants.weddingData}/>
      <MapList/>
    </div>
  );
}

export default App;