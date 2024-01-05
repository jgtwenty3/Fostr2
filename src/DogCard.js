import React from "react";
import { useParams } from "react-router-dom";
import dogsData from "./db.json";
import './App.css';
import NavBar from "./NavBar.js";

function DogCard() {
  const { id } = useParams();
  const dog = dogsData.dogs.find((dog) => dog.id === parseInt(id));

  if (!dog) {
    return <div>Invalid dog ID</div>;
  }

  return (
    <div >
      <div >
      <header>
          <NavBar />
        </header>
        <div className = "dog-card">
      <h2 className ="dog-card h2">{dog.name}</h2>
      <img className =".dog-card img" src = {dog.image} alt ={dog.name}/>
      <p className =".dog-card-p">Arrival: {dog.arrival}</p>
      <p p className =".dog-card-p">Age: {dog.age}</p>
      <p p className =".dog-card-p">Sex: {dog.sex}</p>
      <p p className =".dog-card-p">Color: {dog.color}</p> 
      <p p className =".dog-card-p">Vaccinated: {dog.vaccinated}</p>
      <button className =".dog-card button">Edit Animal</button>
      </div>
    </div>
    </div>
  );
}

export default DogCard;