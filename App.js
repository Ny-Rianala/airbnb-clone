import React, { Component, useState } from "react";
import AirBnbList from "./AirBnbList.js";
import Stays from "./stays.json";
import Header from "./Header.js";
import randomId from "random-id";
// import Search from "./Search.js";


class App extends Component {
   constructor() {
     super()

     this.state = {
       Search: null,
     }
    }

    
    SearchStay = (e) => {
      let searches = e.target.Search;
      this.setState({Search: searches});
    } 
    render() {
      const listOfStays = Stays.filter((Stay) => {
        console.log(Stay);
        if(Stay.Search === null) {
            return Stay;
          } else if(Stay.city.toLowerCase()){
            return Stay;
        }

      }).map(Stay => {
          return (
            <AirBnbList 
                key={randomId()} 
                title={Stay.title} 
                rating={Stay.rating} 
                type={Stay.type} 
                beds={Stay.beds} 
                photo={Stay.photo}
            />
                );
            });
            return(
            <div>
              <input type="text" placeholder="Search a stay" onChange={(e) =>this.SearchStay(e)}/>
              <Header Stay={Stays}/>
              {listOfStays}
            </div>
            )
            }
  }


  // function App() {
  //   const [stay, setStays] = useState("Stays");
  //   const [searchStay, setSeacchStay] = useState("");

  //   return (
  //       <div>
  //         onChange() = e => {
  //             const filteredStay = Stays.filter() 
  //         }
  //       </div>
  //   )
  // }

  
export default App;