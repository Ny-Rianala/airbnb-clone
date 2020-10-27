import React from "React"
import reactDom from "react-dom";
import Search from "./Search.js";
import Header from "./Header"
import Stays from "./stays.json";


function App() {
  return (
    <div>
      <Header Stay={Stays} />
      <Search />
    </div>
  )
}
export default App;