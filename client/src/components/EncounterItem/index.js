import React from "react";
import "./style.css";

function EncounterItem(props) {
  return (
    <div
      className="card"
      onClick={() => props.handleDisplay && props.handleDisplay(props.id)}
    >
      <div className="content">
        <ul>
          <li>
            {props.name}
            {/* {console.log(props)} */}
          </li>
        </ul>
      </div>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default EncounterItem;
