import React, { useState } from 'react'
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose, AiOutlineUser } from 'react-icons/ai';
import { SiCashapp } from 'react-icons/si';

import { Nav } from 'react-bootstrap'
import { SidebarData } from '../data/SidebarData';

import '../css/Sidebar.css';
import { IconContext } from 'react-icons/lib';
import { HashLink as Link } from 'react-router-hash-link';
import { LanguageContext } from '../Apps';

function Navbar(props) {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    return (
        
        <LanguageContext.Consumer>{(language) =>(
            <>
            <IconContext.Provider value={{color: 'white'}, {size:35}} >
            <div className='row justify-content-around align-middle' id="nav">
                <div className='navbar col-6'>
                    <Nav className="left">
                        <Nav.Link href="/Stock-Alert-Webapp" id=''>
                            <SiCashapp size={50} color="rgb(0, 204, 204)"/>
                        </Nav.Link>
                    </Nav>
                </div>
                <div className='navbar col-6'>
                    <Nav className="right">
                        {/* <Nav.Link href='#' id='login'>
                            <AiOutlineUser color='white'/>
                        </Nav.Link> */}
                        <Nav.Link href='#' id='language-toggle' onClick={props.languageToggle}>
                            <h3>{language}</h3>
                        </Nav.Link>
                        <Nav.Link href="#" id='burger'>
                            <FiMenu onClick={showSidebar} color='white'/>
                        </Nav.Link>
                    </Nav>
                </div>
                
            </div>
            <div className='row'>
            <nav className = {sidebar ? 'nav-menu col-md-3 col-sm-9 col-xs-9': 'nav-menu active' }>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='sidebar-toggle'>
                        <Nav.Link to="#" className='menu-bars float-end'>
                            <AiOutlineClose size={35} color='transparent'/>
                        </Nav.Link>
                    </li>
                    {SidebarData.map((item, index)=> {
                        return (
                            <Link className='link' to={item.path}>
                                <li key={index} className={item.cName}>
                                    <div>
                                        {item.icon}
                                        <span className='link-text'>{item.title}</span>
                                    </div>
                                </li>
                            </Link>
                        );
                    })}
                </ul>
            </nav>
            </div>
            </IconContext.Provider>
            </>
        )}</LanguageContext.Consumer>
    )
    
}

export default Navbar