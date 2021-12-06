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
                <a href="#"><img class="navImg" src="./Bullbanner.png" alt=""/></a>
                <a href="#">Roadmap</a>
                <a href="#">Mint</a>
                <a href="#">Rarity</a>
                <a href="#">Team</a>
                <a href="#">FAQ</a>
                <FontAwesomeIcon class= 'discord' icon={['fab', 'discord']} />
                <FontAwesomeIcon class= 'instagram' icon={['fab', 'instagram']} />
            </div>
        </div>
    )
}

export default Home;