import React from "react";
//Para enviiarme a otra pagina con react router dom
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="bg-slate-600 flex justify-between">
      <h1>React MySQL</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/new">Create Task</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
