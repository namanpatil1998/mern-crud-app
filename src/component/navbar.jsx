import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <header>
                <nav class="navbar navbar-expand-lg navbar-light bg-warning">
                   <button className='bg-dark m-2'><NavLink to='/' className='text-light' >Home</NavLink></button>
                   <button className='bg-dark m-2'><NavLink to='/Register' className='text-light' >Register</NavLink></button>
                </nav>
            </header>
        </>
    );
}

export default Navbar;