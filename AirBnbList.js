import React from "react";


function AirBnbList(props) {
    return(
            <div className="listOfCards">
                <div className="cards">
                    <img src={props.photo}/>
                    <ul className="card">
                        <p>{props.maxGuests}</p>
                        <div className="bottom-card">
                          <button className="button">Super Host</button>
                          <li>{props.type}</li>
                          <li>{props.beds}beds</li>
                          <li>{props.rating}
                          <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none
                                    " height="24" width="24" x="0"/><polygon points="14.43,10 12,2 9.57,10 2,10 8.18,14.41 5.83,22 12,17.31 18.18,22 15.83,14.41 22,10"/></g>
                          </svg>
                          </li>
                        </div>
                        <div>
                          <li>{props.title}</li>
                        </div>
                    </ul>
                </div>
            </div>
    )
}


export default AirBnbList;