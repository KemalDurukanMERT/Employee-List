
import "../src/App.css";
import Header from './mainCard/header'
import Range from './mainCard/range' 
import Lists from "./List/lists";

function App() {
  return (
    <div className="container bg-light">
      <div className="main-card">
        <Header />
        <Range />
      </div>
      <Lists />
      <div className="buttons d-flex justify-content-evenly">
        <button className="btn btn-primary">Prev</button>
        <button className="btn btn-primary">Next</button>
      </div>
    </div>
  );
}

export default App;
