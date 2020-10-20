import React from "react";

function Header() {
    return(
        <div className="card-heading">
           <form className="form">
            <label className="label" htmlFor="query"></label>
                <input className="input" type="text" name="query" placeholder="hsjdha"/>
                <input className="input" type="number" name="query" placeholder="Add guests"/>
                <button type="submit"></button>
            </form>
            <h1>Stays in Finland</h1>
        </div>
    )
}

export default Header;