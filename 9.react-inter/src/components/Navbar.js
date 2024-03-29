import React from 'react'
import logo from '../assets/Logo.png'
import { Link } from 'react-router-dom';
import {toast} from 'react-hot-toast';

const Navbar = (props) => {

    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className='flex justify-evenly'>
        <Link to="/">
            <img src={logo} alt='Alok' width={160} height={32} loading='lazy' />
        </Link>

        <nav>
            <ul className='flex gap-4'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">About</Link></li>
                <li><Link to="/">Contact</Link></li>
            </ul>
        </nav>

        <div className='flex ml-5 mr-3 gap-4' >
            {   !isLoggedIn &&
                <Link to="/login"> <button>Login</button></Link>  
            }
            {   !isLoggedIn &&
                <Link to="/signup"> <button >Signup</button> </Link>
            }
            {   isLoggedIn &&
                <Link to="/"> <button onClick={ () => { setIsLoggedIn(false); toast.success("Logged Out")}}>Log Out</button></Link>
            }
            {   isLoggedIn &&
                <Link to="/dashboard"> <button>Dashboard</button></Link>
            }
        </div>

    </div>
  )
}

export default Navbar;