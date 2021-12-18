import React from 'react';
import './Retry.css';
import logoish from './assets/images/logoish.png';
import { Link } from 'react-router-dom';
function Nav() {

    return(
        <div className="nav">
            <a href="https://metabullsnft.com/" ><img class="navImg" src={logoish} alt="" /></a>
            <div className="navMenu">
                <a href="https://metabullsnft.com/#about" class='navmenu'>ABOUT</a>
                <a href="https://metabullsnft.com/#roadmap" class='navmenu'>ROADMAP</a>
                <a href="https://metabullsnft.com/#team" class='navmenu'>TEAM</a>
                <a href="https://metabullsnft.com/#faq" class='navmenu'>FAQ</a>
                <Link to='https://metabullsnft.com/mint' class='linkMint'><a href="https://metabullsnft.com/mint" class='navmenu navMint'>MINT</a></Link>
            </div>
        </div>
    )
}

export default Nav;