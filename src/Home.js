import React from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import bullgif from './assets/images/bullgif.gif'

function Home(){
    return(
        
        <div class='mainContainer'>
            <section class = 'firstSection'>
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
            </section>


            <section class = 'secondSection divContainer'>
                <div class="aboutContainer">
                    <div class="leftPanel">
                     <h1>What are Meta Bulls?</h1>
                     <p>Meta Bulls NFT is a collection of 5000 NFTs with a raging passion for bullish patterns. They are all decked out with hats, outfits, eyewear, and much more.</p>

                     <p>The collection consists of 5000 programmatically generated bulls from over 90 distinctive traits. Some items might be rarer but each Meta Bull is completely unique! Meta Bulls showcases that feeling of fashion, chill vibes, and a bullish mood. Live in a world of bulls, in a world with style, and in a world of W's.</p>
                        
                     <p>Apart from getting an awesome profile picture, participating in this project will help shape the Meta Bull's name. The ETH from the purchased Meta Bulls will be raised to build a system of community giveaways, awesome Meta Bull merchandise, future collaboration with other big brands, and much more!</p>
                    </div>
                    <div class="rightPanel">
                        <img src={bullgif} alt=''/>
                    </div>
                </div>   
            </section>

            <section class="thirdSection">
                <div class="thirdSectionPicture">
                    <div class="thirdOverlay">
                        <div class="mintContainer">
                            <h1>Public Sale</h1>
                            <p>Max mints of 5 per transaction and 20 per wallet</p>
                            <p><strong>0.01 ETH + Gas Fee</strong></p>
                            <a href="Home.js"><button>Mint</button></a>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default Home;