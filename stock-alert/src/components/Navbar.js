import React, { useState } from 'react'
import { FiMenu } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';

import { Nav } from 'react-bootstrap'
import { SidebarData } from '../data/SidebarData';
import { Route } from 'react-router-dom';

import './css/Sidebar.css';
import { IconContext } from 'react-icons/lib';

function Sidebar() {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)
    return (
        <>
        <IconContext.Provider value={{color: 'black'}}>
        <div className="navbar">
        <Nav>
            <Nav.Link href="#" id='burger'>
                <FiMenu onClick={showSidebar}/>
            </Nav.Link>
        </Nav>
        </div>
        <nav className = {sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items'>
                <li className='sidebar-toggle'>
                    <Nav.Link to="#" className='menu-bars float-end'>
                        <AiOutlineClose/>
                    </Nav.Link>
                </li>
                {SidebarData.map((item, index)=> {
                    return (
                        <li key={index} className={item.cName}>
                            <Nav.Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Nav.Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
        </IconContext.Provider>
        </>
    )
}

export default Sidebar