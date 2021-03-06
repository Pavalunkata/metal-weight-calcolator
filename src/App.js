import React, {useState} from "react";
// eslint-disable-next-line
import stayle from "./stayle/stayle.scss"

//Importing data
import data from "./data";
import metalsData from "./metalsData"

//Adding components
import Library from "./components/Library"
import Figure from "./components/Figure"

function App() {

  //Adding state
const [figures, setFigures] = useState(data());
const [currentFigure, setCurrentFigure] = useState(figures[0]);
const [metals, setMetals] = useState(metalsData());

  return (
    <div className="calc">
      <Figure 
        currentFigure = {currentFigure}
        metals = {metals}
      />
      <Library
        figures = {figures}
        setFigures = {setFigures}
        currentFigure = {currentFigure}
        setCurrentFigure = {setCurrentFigure}
      />

    </div>
  );
}

//https://medium.com/@nitinpatel_20236/how-to-build-a-simple-calculator-application-with-react-js-bc10a4568bbd tutorial for calc

export default App;
