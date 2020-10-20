import React, { useState } from "react";


function Header() {
    const useModal = () => {
        const [isActive, setIsActive] = useState(false);
        const open = () => setIsActive(true);
        const close = () => setIsActive(false);
    }

    return(
        <div className="card-heading">
           <form className="form">
            <label className="label" htmlFor="query"></label>
                <input className="input" type="text" name="query" placeholder="hsjdha"/>
                <input className="input" type="number" name="query" placeholder="Add guests"/>
                <button type="submit"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg></button>
            </form>
            <h1>Stays in Finland</h1>
        </div>
    )
}

export default Header;