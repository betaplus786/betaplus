import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import'./Navbar.css'
import Dropdown from './Dropdown'
import DropdownP from './DropdownP'

function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false)
    const [dropdownp, setDropdownP] = useState(false)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false); 

    const onMouseEnter = () => {
        if(window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };
    const onMouseLeave = () => {
        if(window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };
    const onMouseEnterP = () => {
        if(window.innerWidth < 960) {
            setDropdownP(false);
        } else {
            setDropdownP(true);
        }
    };
    const onMouseLeaveP = () => {
        if(window.innerWidth < 960) {
            setDropdownP(false);
        } else {
            setDropdownP(false);
        }
    };

    return (
        <>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo'>
                    <img src={require('../resources/img/betaLight.png')} alt="BETA+" srcset="" />
                </Link>
                <div className='menu-icon' onClick={handleClick }>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item' onMouseEnter={onMouseEnterP} onMouseLeave={onMouseLeaveP}>
                        <Link to='/Product' className='nav-links' onClick={closeMobileMenu}>
                            Products 
                        </Link>
                        {dropdownp && <DropdownP />}
                    </li>
                    <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <Link to='/SolarESSCS' className='nav-links' onClick={closeMobileMenu}>
                            Solutions 
                        </Link>
                        {dropdown && <Dropdown />}
                    </li>
                    <li className='nav-item'>
                        <Link to='/Download' className='nav-links' onClick={closeMobileMenu}>
                            Downloads
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Blog' className='nav-links' onClick={closeMobileMenu}>
                            Blog
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/aboutUs' className='nav-links' onClick={closeMobileMenu}>
                            About Us
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/contactUs' className='nav-links' onClick={closeMobileMenu}>
                            Contact us
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/language' className='nav-links fa-solid fa-globe' onClick={closeMobileMenu}>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar