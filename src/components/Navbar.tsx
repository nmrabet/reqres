import React from "react";
import { BsDropletHalf } from "react-icons/bs";
import { RiAccountCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./home.css";

export default function Navbar() {
  return (
    <div className='homepage'>
      <h2>
        <Link to='/' className='logo'>
          <BsDropletHalf />
          ReqRes
        </Link>
      </h2>

      <ul className='navigation'>
        <li>
          <Link to='/users' className='link'>
            Users
          </Link>
        </li>
        <li>
          <Link to='/ressources' className='link'>
            Ressources
          </Link>
        </li>
        <li>
          <Link to='/contact' className='link'>
            Contact
          </Link>
        </li>
      </ul>

      <ul className='registration'>
        <li>
          <Link to='/signIn' className='link'>
            <RiAccountCircleFill className='sign-up' size='1.5em' />
            Sign Up
          </Link>
        </li>
        <li>
          <Link to='/signOut' className='link'>
            {" "}
            Sign Out
          </Link>
        </li>
      </ul>
    </div>
  );
}
