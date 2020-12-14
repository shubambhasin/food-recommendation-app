import React, {useState} from "react";
import "./styles.css";

var availableFood = {

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

var foodArray = Object.keys(availableFood);





export default function App() {

  
const [food, setFood] = useState("Mexican")

clickedFoodSet = (settingfood) =>  {

  setFood(settingfood);
  

}

console.log(food);




  return (
    <div className="App">
      <div>
      <h2>Food Recommentdation 
      <span
      style={{color:"black"}}
      > App</span></h2>
      </div>

      <h3 
      style={{color:"#fd3a69"}}
      >Cuisines Available</h3>
      

      <div>
        {foodArray.map((food) => {
            return(
              <button
              className="button-ui"
              onClick={() => {clickedFoodSet(food)}}
              >{food}</button>
            )
        })}
      </div>
      <div>
        <ul className="no-bullet list-ui">
          {
            availableFood[food].map((food) => {
                return(
                  
                  <li className="list-item-border">
                    <div>
                       <span>DishName: </span>
                       <span className="Food-name-color">{food.name}
                    </span></div>
                    <div style={{margin:"0.5rem"}}></div>
                    <div>
                       Rating: {food.rating}
                    </div>
                  </li>
                  

                )
            })

          }
        </ul>
      </div>





    </div>
  );
}
