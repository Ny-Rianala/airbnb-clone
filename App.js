import React from "react";
import AirBnbList from "./AirBnbList.js";
import Stays from "./stays.json";
import Header from "./Header.js"


 function App() {
         const listOfStays = Stays.map(Stay => {
             return (
         <AirBnbList key={Stay.id} title={Stay.title} rating={Stay.rating} type={Stay.type} beds={Stay.beds} photo={Stay.photo}/>
             );
     });
   return(
     <div>
        <Header />
        {listOfStays}
     </div>
     )
   }



export default App;