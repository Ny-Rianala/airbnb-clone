import React, { useState } from "react";
import AirBnbList from "./AirBnbList.js";
import Stays from "./stays.json";
import Header from "./Header.js";
import randomId from "random-id";



function Search() {
  const [searchStay, setSearchStay] = useState(Stays);

  const handleChange = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = form.value.toLowerCase();
    let search = [];
    if (searchStay !== "") {
      search = Stays.filter(stay => stay.city.toLowerCase().includes(data));
      console.log("data", search);
      setSearchStay(search);
      return search;
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        onChange={handleChange}
      />
      <ul>
        {searchStay.map(Stay => (
            <>
              <AirBnbList
                key={randomId()} 
                title={Stay.title} 
                rating={Stay.rating} 
                type={Stay.type} 
                beds={Stay.beds} 
                photo={Stay.photo}
               />
            </>
          )
        )}
      </ul>
    </div>
  )
}


export default Search;