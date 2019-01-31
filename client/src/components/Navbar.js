import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
   return (
      <ul style={{ listStyleType: "none", padding: 0 }}>
         <li>
            <Link to="/">Home</Link>
         </li>
         <li>
            <Link to="/campaign">Campaign</Link>
         </li>
         <li>
            <Link to="/encyclopedia">Encyclopedia</Link>
         </li>
         <li>
            <Link to="/setup">Setup</Link>
         </li>
      </ul>
   );
}

export default Navbar;
