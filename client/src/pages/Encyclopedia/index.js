import React, { Component } from 'react';
import "./style.css";

class Encyclopedia extends Component {
   state = {

   }

   render() {
      return (
         <div id="encyclopedia">
            <div id="sidebar">
               Encyclopedia Sidebar!
            </div>
            <div id="main">
               Encyclopedia Main!
            </div>
         </div>
      );
   }
}

export default Encyclopedia;