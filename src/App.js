import React, {useState} from "react";
import "./styles.css";

const availableFood = {

  Chinese: [
    {name:'Hotpot', rating:'4/5'},
    {name:'Sichuan Pork', rating:"3.5/5"},
    {name:"Braised Pork Balls in Gravy", rating:"5/5"},
    {name:"Shrimp with Vermicelli and Garlic",rating:"4/5"},
    {name:"Dumplings", rating: "5/5"},
    {name:"Chow Mein", rating: "4/5"}
  ],
  Mexican: [
    {name:"Chilaquiles", rating:"5/5"},
    {name:"Pozole", rating:"4/5"},
    {name:"Tacos al pastor", rating:"3/5"},
    {name:"Tostadas", rating:"4.5/5"},
    {name:"Chiles en nogada", rating:"4/5"},
    {name:"Guacamole", rating:"5/5"}
  ],
  Italian: [
    {name:"Chilaquiles", rating:"5/5"},
    {name:"Pozole", rating:"4/5"},
    {name:"Tacos al pastor", rating:"3/5"},
    {name:"Tostadas", rating:"4.5/5"},
    {name:"Chiles en nogada", rating:"4/5"},
    {name:"Guacamole", rating:"5/5"}


  ],
  Greek: [
    {name:"Chilaquiles", rating:"5/5"},
    {name:"Pozole", rating:"4/5"},
    {name:"Tacos al pastor", rating:"3/5"},
    {name:"Tostadas", rating:"4.5/5"},
    {name:"Chiles en nogada", rating:"4/5"},
    {name:"Guacamole", rating:"5/5"}

  ],
  French: [
    {name:"Chilaquiles", rating:"5/5"},
    {name:"Pozole", rating:"4/5"},
    {name:"Tacos al pastor", rating:"3/5"},
    {name:"Tostadas", rating:"4.5/5"},
    {name:"Chiles en nogada", rating:"4/5"},
    {name:"Guacamole", rating:"5/5"}

  ]
}


var foods = Object.keys(availableFood);

console.log(foods)

export default function App() {

  const [food, setFood] = useState("French")

  
showFoodDetails = (food) => {

  setFood(food);

//
}



  return (
    <div className="App">

        <h1>Food Recommendation App</h1>
        <h2>Available Cuisines</h2>

        <div>
          {foods.map((food) => {

            return(

              <button
              onClick={showFoodDetails(food)}
              >{food}</button>

            )
          }

           


          )}

        </div>
        <div>

          <ul>

            {}

          </ul>

        </div>


    </div>
  );
}
