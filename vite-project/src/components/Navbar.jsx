import React from "react";
//Para enviiarme a otra pagina con react router dom
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="bg-slate-600">
    <h1 className="text-white font-bold text-3xl">CRUD MERN</h1>
    <div className="bg-slate-600  flex justify-center px-5 py-2">
      <ul className="text-sky-600 font-bold flex ">
        <li className=" hover:text-sky-400 hover:text-lg px-2">
          <Link to="/">Home</Link>
        </li>
        <li className=" hover:text-sky-400 hover:text-lg">
          <Link to="/new">Create Task</Link>
        </li>
      </ul>
    </div>
    </div>
  );
}

export default Navbar;
