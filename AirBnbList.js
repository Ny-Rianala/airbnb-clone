import React from "react";


function AirBnbList(props) {
    return(
        <>
            <div>
                <div className="cards">
                    <img src={props.photo}/>
                    <ul className="card">
                        <p>{props.maxGuests}</p>
                        <div className="bottom-card">
                          <button className="button">Super Host</button>
                          <li>{props.type}</li>
                          <li>{props.beds}</li>
                          <li>{props.rating}</li>
                        </div>
                        <div>
                          <li>{props.title}</li>
                        </div>
                    </ul>
                </div>
            </div>
        </>
    )
}


export default AirBnbList;