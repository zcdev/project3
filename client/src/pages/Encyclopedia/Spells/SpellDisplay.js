import React from "react";

function SpellDisplay(props) {

      if (props.spell) {
         return (
            <div>
               <h1>{props.spell.name}</h1>
               <hr></hr>
               <br></br>
               <h3>Description</h3>
               <div>
                     <hr></hr>
                     <p><i>{props.spell.desc}</i></p>
                  </div>

                  <h3>Higher Level</h3>
               <div>
                     <hr></hr>
                     <p><i>{props.spell.higher_level}</i></p>
                  </div>

                  <h3>Range</h3>
               <div>
                     <hr></hr>
                     <p><i>{props.spell.range}</i></p>
                  </div>

                  <h3>Casting Time</h3>
               <div>
                     <hr></hr>
                     <p><i>{props.spell.casting_time}</i></p>
                  </div>

                  <h3>Duration</h3>
               <div>
                     <hr></hr>
                     <p><i>{props.spell.duration}</i></p>
                  </div>

               <h3>Classes</h3>
               {props.spell.classes.map(classes => (
                  <div>
                     <hr></hr>
                     <p><strong>Name:</strong> {classes.name}</p>
                  </div>
               ))}
               <h3>Sub-Classes</h3>
               {props.spell.subclasses.map(subclasses => (
                  <div>
                     <hr></hr>
                     <p><strong>Name:</strong> {subclasses.name}</p>
                  </div>
               ))}
               
            </div>
         );
      }

   return (
      <div>
         <h1><i>Cast with caution: magical deeds have magical consequences.</i></h1>
      </div>
   );
}

export default SpellDisplay;