import React from "react";
import EditForm from"./EditForm.js";
import AddGuest from "./AddGuest.js";


function Header() {
    return(
        <div>
            <div className="card-heading">
                <EditForm />
                <AddGuest />
            </div>
            <h1>Stays in Finland</h1>
        </div>
    )
}

export default Header;