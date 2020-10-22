import React from "react";
import EditForm from"./EditForm.js";
import AddGuest from "./AddGuest.js";
// import Search from "./Search.js";


function Header(props) {
    return(
        <div>
            <div className="card-heading">
                <EditForm />
                <AddGuest />
                
            </div>
            <div className="heading">
                <h1>Stays in Finland</h1>
                <p>{props.Stay.length}+Stays</p>
            </div>
        </div>
    )
}

export default Header;