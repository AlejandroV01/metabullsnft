import React from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Home(){
    return(
        
        <div class='mainContainer'>
            <div class = 'mainPicture'>
                <div class = 'overlay'>
                    <div class = 'textBoxCenter'>
                    <h1>Welcome To</h1>
                    <h1>Meta Bulls</h1>
                    </div>
                </div>
            </div>
            <div class="nav container">
                <a href="/home.js"><img class="navImg" src="./Bullbanner.png" alt=""/></a>
                <a href="/home.js">Roadmap</a>
                <a href="/home.js">Mint</a>
                <a href="/home.js">Rarity</a>
                <a href="/home.js">Team</a>
                <a href="/home.js">FAQ</a>
                <FontAwesomeIcon class= 'discord' icon={['fab', 'discord']} />
                <FontAwesomeIcon class= 'instagram' icon={['fab', 'instagram']} />
            </div>
        </div>
    )
}

export default Home;