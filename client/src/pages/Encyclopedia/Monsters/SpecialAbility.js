import React from 'react';

function SpecialAbility(props) {
   return (
      <div>
         <p><strong>Name: </strong>{props.name}</p>
         <p><strong>Description: </strong>{props.ability}</p>
      </div>
   );
}

export default SpecialAbility;