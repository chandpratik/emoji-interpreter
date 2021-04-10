import React, { useState } from "react";
import "./styles.css";

var animalsDictionary = {
  "🐒": "Monkey",
  "🦍": "Gorilla",
  "🦊": "Fox",
  "🦝": "Raccon",
  "🐱": "Cat",
  "🐗": "Boar"
};

var animalsWeKnow = Object.keys(animalsDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function animalInput(event) {
    var userInput = event.target.value;
    var meaning = animalsDictionary[userInput];
    if (meaning === undefined) {
      meaning = "We don't have this animal in our database";
    }
    setMeaning(meaning);
  }

  function animalClickHandler(animal) {
    var meaning = animalsDictionary[animal];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Welcome to the Animal Intepreter</h1>

      <input onChange={(event) => animalInput(event)} />

      <h2> {meaning} </h2>
      <h3> Animals we know </h3>
      {animalsWeKnow.map(function (animal) {
        return (
          <span
            onClick={() => animalClickHandler(animal)}
            style={{ fontSize: "3rem", padding: "0.5rem", cursor: "pointer" }}
            key={animal}
          >
            {animal}
          </span>
        );
      })}
    </div>
  );
}
