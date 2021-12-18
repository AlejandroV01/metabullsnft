import React from 'react';
import './Retry.css';
import logoish from './assets/images/logoish.png';
import { Link } from 'react-router-dom';
function Nav() {

    return(
        <div className="nav">
            <a href="https://metabullsnft.com/" ><img class="navImg" src={logoish} alt="" /></a>
            <div className="navMenu">
                <a href="#about" class='navmenu'>ABOUT</a>
                <a href="#roadmap" class='navmenu'>ROADMAP</a>
                <a href="#team" class='navmenu'>TEAM</a>
                <a href="#faq" class='navmenu'>FAQ</a>
                <Link to='/mint'><a href="https://metabullsnft.com/mint" class='navmenu'>MINT</a></Link>
            </div>
        </div>
    )
}

export default Nav;