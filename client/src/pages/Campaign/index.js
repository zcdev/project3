import React, { Component } from 'react';
import "./campaign.css";

class Campaign extends Component {
   state = {

   }

   render() {
      return (
         <div id="campaign">
            <div id="campaign-sidebar">
               Campaign Sidebar!
            </div>
            <div id="campaign-main">
               Campaign Main!
            </div>
         </div>
      );
   }
}

export default Campaign;