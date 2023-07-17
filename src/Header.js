import { Link, Outlet } from 'react-router-dom';
import './Header.css';
import React from 'react';


function Header() {
    const navItems = [{ name: "Home", path: '/' },
    { name: "About Us", path: '/about' },
    { name: "Services", path: '/services' },
    { name: "Contact us", path: '/contact' },
    { name: "Careers", path: '/careers' },
    { name: "Sign Up", path: '/signup'}];

    const prepareNavItems = () => {
        return navItems.map(navItem => {
            return <li key={navItem.name}><Link to={navItem.path}>{navItem.name}</Link></li>;
        })
    }

    return (<React.Fragment><div className='header'>
    <nav>
      <ul>
      {prepareNavItems()}        
      </ul>
    </nav>
    <Outlet/>
    </div>
     </React.Fragment>
    );
}

export default Header;