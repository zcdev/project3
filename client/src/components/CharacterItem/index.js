import React from "react";
import "./style.css";

function CharacterItem(props) {
  return (
    <div
      className="card red"
      onClick={() => props.handleDisplay && props.handleDisplay(props.id)}
    >
      <div className="">
        <ul>
          <li>
            {props.name}
            {/* {console.log(props)} */}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CharacterItem;
