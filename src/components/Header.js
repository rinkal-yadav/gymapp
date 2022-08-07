import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Header = () => {
    const wtficon = "http://cdn.shopify.com/s/files/1/0029/0629/2294/products/image_c8ec71e8-bb78-4805-8fab-08b1e3042679_1200x1200.png?v=1604053691"

    return (
        <div className='header'>
           <div className='logoBox'><Link to='#'><img className='headerLogo' src={wtficon} alt='Wtf img' /></Link></div> 
                <ul className='headLinkFlex' type="none">
                <li><NavLink className={({ isActive }) => isActive ? "headLinkText active" : "headLinkText"} to="/fitness" >Fitness</NavLink></li>
                <li><NavLink style={({ isActive }) => { return { "style": isActive ? 'underline' : '' } }} to="/nutrition" className="headLinkText">Nutrition</NavLink></li>
                <li><NavLink style={({ isActive }) => { return { "style": isActive ? 'underline' : '' } }} to="/gyms" className="headLinkText">Gyms</NavLink></li>
                <li><NavLink style={({ isActive }) => { return { "style": isActive ? 'underline' : '' } }} to="/becomepartner" className="headLinkText">Become WTF Partner</NavLink></li>
                <li><NavLink style={({ isActive }) => { return { "style": isActive ? 'underline' : '' } }} to="/aboutus" className="headLinkText">About Us</NavLink></li>
                <li><button className='loginbtn'><Link to="#" className="headLinkText">Login</Link></button></li>
            </ul>
        </div>
    )
}

export default Header