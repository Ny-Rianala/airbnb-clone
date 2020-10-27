import React, { useState } from "react";
import AddGuest from "./AddGuest";
import Search from "./Search";


function EditForm() {
    const [isClicked, setIsClicked] = useState(false);
        return (
            <div>
                <button className="addBtn" onClick={() => setIsClicked(!isClicked)}>Add Location</button>
                <button className="addBtn" onClick={() => setIsClicked(!isClicked)}>Add Guests</button>
                {isClicked && 
                   <div className="openModal">
                       <AddGuest />
                       <Search />
                   </div>}
            </div>
      )
    }


export default EditForm;




