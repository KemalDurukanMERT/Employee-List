import { useState } from "react";
import { data } from "../helper/data";
import Card from "../components/Card";


const MainCard = () => {
    // const [data, setData] = useState(dataFromFile);
    const [person, setPerson] = useState(data.slice(0, 5));
    const [index, setIndex] = useState(0);
    
    const handleNext = () => {
        let newIndex=index+5
        if(newIndex>data.length-5) newIndex = 0 
        setIndex(newIndex)
        setPerson(data.slice(newIndex, newIndex+5))
    }
    const handlePrev = () => {
        let newIndex=index-5
        if(newIndex<0) newIndex = data.length - 5 
        setIndex(newIndex)
        setPerson(data.slice(newIndex, newIndex+5))
    }

  return (
    <div className="container bg-warning main-card p-4">
      <h3 className="text-center display-6">Employee List</h3>
      <div className="number-display text-center fw-bolder">
        <p>Employees {index+1} to {index+5}</p>
      </div>
      <Card people={person}  />
      <div className="buttons d-flex justify-content-around">
        <button className="btn btn-success" onClick={handlePrev}>PREV</button>
        <button className="btn btn-success" onClick={handleNext}>NEXT</button>
      </div>
    </div>
  );
};

export default MainCard;
