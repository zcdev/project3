import React, { Component } from 'react';
import "./style.css";

class Encyclopedia extends Component {
   state = {

   }

   render() {
      return (
         <div id="encyclopedia">
            <div id="encyclopedia-sidebar">
               Encyclopedia Sidebar!
            </div>
            <div id="encyclopedia-main">
               Encyclopedia Main!
            </div>
         </div>
      );
   }
}

export default Encyclopedia;