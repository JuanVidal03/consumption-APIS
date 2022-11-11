import React from 'react';
// import React Router Dom
import { Link } from 'react-router-dom';


const NavBarRickAndMorty = () => {
    return (
        <nav className='navBar-RAM-container'>
            <div className='navBar-RAM-logo-container'>
                <h6 className='logo-RAM'><span className='span-logo-RAM'>J</span>VIDAL</h6>
            </div>
            <ul className='navBar-RAM-menu'>
                <li className='navBar-RAM-item-menu'>
                    <Link to='/rick-and-morty'> R&M </Link>
                </li>
                <li className='navBar-RAM-item-menu'>
                    <Link to='/nasa'> NASA </Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBarRickAndMorty;
