import React, {useState} from "react";
import "./styles.css";


var availableFood = {

  Chinese: [
    {name:'Hotpot', rating:'3.8/5'},
    {name:'Sichuan Pork', rating:"3.5/5"},
    {name:"Braised Pork Balls in Gravy", rating:"5/5"},
    {name:"Shrimp with Vermicelli and Garlic",rating:"4.3/5"},
    {name:"Dumplings", rating: "5/5"},
    {name:"Chow Mein", rating: "4.3/5"}
  ],
  Mexican: [
    {name:"Chilaquiles", rating:"5/5"},
    {name:"Pozole", rating:"4/5"},
    {name:"Tacos al pastor", rating:"3.7/5"},
    {name:"Tostadas", rating:"4.7/5"},
    {name:"Chiles en nogada", rating:"4.1/5"},
    {name:"Guacamole", rating:"5/5"}
  ],
  Italian: [
    {name:"Risotto", rating:"5/5"},
    {name:"Pizza", rating:"4/5"},
    {name:"Bottarga", rating:"3/5"},
    {name:"Fiorentina Steak", rating:"4.2/5"},
    {name:"Focaccia (and other bread) en nogada", rating:"4.7/5"},
    {name:"Arancini & Supplì", rating:"4/5"}


  ],
  Greek: [
    {name:"Taramasalata", rating:"5/5"},
    {name:"Moussaka", rating:"4.1/5"},
    {name:"Grilled meatr", rating:"3/5"},
    {name:"Courgette balls (kolokythokeftedes)", rating:"4.5/5"},
    {name:"Feta & cheeses", rating:"4.6/5"},
    {name:"Honey & baklava", rating:"5/5"}

  ],
  French: [
    {name:"Steak frites", rating:"5/5"},
    {name:"Chicken confit", rating:"5/5"},
    {name:"Bouillabaisse", rating:"3.9/5"},
    {name:"Salmon en papillote", rating:"3.7/5"},
    {name:"Quiche Lorraine", rating:"5/5"},
    {name:"Croque monsieur", rating:"4/5"}

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
      <h1>Food Recommentdation 
      <span
      style={{color:"black"}}
      > App</span></h1>
      </div>

      <h3 
      style={{color:"#fd3a69",
        }}

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
