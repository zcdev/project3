import React from 'react';
import "./style.css";

function Monster(props) {
   return (
      <div 
         className={props.index % 2 === 0 ? "dark" : "light"} 
         onClick={() => props.getMonsterInfo("monster", props.index)}
      >
         <p className="m-0 pl-3">{props.name}</p>
      </div>
   );
}

export default Monster;