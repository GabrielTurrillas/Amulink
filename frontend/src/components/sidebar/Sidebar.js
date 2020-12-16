import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Sidebar.css';
import TotalHorasAtendidas from '../informes/TotalHorasAtendidas';
import * as RiIcons  from "react-icons/ri";


const Sidebar = () => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    const guestNav = () => (
        <></>
    )

    const authNav = () => (
        <Fragment>
            <nav className='nav-menu'>
                <ul className='nav-menu-items'>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                    <li style={styleSesiones}>
                        <RiIcons.RiTimeFill size={30} style={{marginRight:'16px'}}/>
                        <p style={{marginTop:'40px'}}>Sesiones atendidas este mes: <TotalHorasAtendidas/></p>
                    </li>
                </ul>
            </nav>
        </Fragment>
    )
    
    return (
        <Fragment>
            {isAuthenticated ? authNav() : guestNav()}
        </Fragment>
    );
}
const styleSesiones = {
        display:'flex',
        justifyContent:'flex-start',
        alignItems: 'center',
        listStyle:'none',
        height:'60px',
        width:'100%',
        fontSize:'18px',
        padding:'0 16px',
}

export default Sidebar;
