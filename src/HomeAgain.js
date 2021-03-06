import React, { useState, useEffect } from 'react';
import './HomeAgain.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import bullgif from './assets/images/bullgif.gif'
import Clock from './components/Clock'
// import rarityBackground from './assets/images/rarityBackground.png'
// import rarityHair from './assets/images/rarityHair.png'
// import rarityNose from './assets/images/rarityNose.png'
// import rarityHorn from './assets/images/rarityHorn.png'
// import rarityEye from './assets/images/rarityEye.png'
// import rarityHat from './assets/images/rarityHat.png'
// import rarityEaring from './assets/images/rarityEaring.png'
// import rarityClothe from './assets/images/rarityClothe.png'
// import rarityMouth from './assets/images/rarityMouth.png'
import logoish from './assets/images/logoish.png'
//import graylinevertical from './assets/images/graylinevertical.png'

function HomeAgain() {
    const [timerDays, setTimerDays] = useState();
    const [timerHours, setTimerHours] = useState();
    const [timerMinutes, setTimerMinutes] = useState();
    const [timerSeconds, setTimerSeconds] = useState();

    let interval;

    const startTimer = () => {
        const countDownDate = new Date("February 28,2022 ").getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();

            const distance = countDownDate - now;

            const days = Math.floor(distance / (24 * 60 * 60 * 1000));
            const hours = Math.floor((distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
            const seconds = Math.floor((distance % (60 * 1000)) / 1000);

            if (distance < 0) {
                //stop Timer

                clearInterval(interval.current);
            } else {
                // Update timer
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        })
    };

    useEffect(() => {
        startTimer();
    });
    return (

        <div class='whole'>

            
            <div class='mainPicture'>
                <div class='overlay'>
                    <div class='textBoxCenter'>
                        <h1>Welcome To</h1>
                        <h1>Meta Bulls</h1>
                    </div>
                </div>
            </div>
            <div class="nav">
                <a href="/home.js" ><img class="navImg" src={logoish} alt="" /></a>
                <a href="/home.js" class='navmenu'>Roadmap</a>
                <a href="/home.js" class='navmenu'>Mint</a>
                <a href="/home.js" class='navmenu'>Rarity</a>
                <a href="/home.js" class='navmenu'>Team</a>
                <a href="/home.js" class='navmenu'>FAQ</a>
                <a href="https://www.google.com" target="_blank" rel="noreferrer" class='discord'><FontAwesomeIcon class='discord' icon={['fab', 'discord']} /></a>
                <a href="https://twitter.com/MetaBullsNFT" target="_blank" rel="noreferrer" class='twitter'><FontAwesomeIcon class='twitter' icon={['fab', 'twitter']} /></a>
                <a href="https://instagram.com/metabullsnft/" target="_blank" rel="noreferrer" class='instagram'><FontAwesomeIcon class='instagram' icon={['fab', 'instagram']} /></a>
            </div>
            
            <div class="aboutContainer">
                <div class="leftPanel">
                    <h1>What are Meta Bulls?</h1>
                    <div className="aboutText">
                        <p>Meta Bulls NFT is a collection of 5000 NFTs with a raging passion for bullish patterns. They are all decked out with hats, outfits, eyewear, and much more.</p>

                        <p>The collection consists of 5000 programmatically generated bulls from over 90 distinctive traits. Some items might be rarer but each Meta Bull is completely unique! Meta Bulls showcases that feeling of fashion, chill vibes, and a bullish mood. Live in a world of bulls, in a world with style, and in a world of W's.</p>

                        <p>Apart from getting an awesome profile picture, participating in this project will help shape the Meta Bull's name. The ETH from the purchased Meta Bulls will be raised to build a system of community giveaways, awesome Meta Bull merchandise, future collaboration with other big brands, and much more!</p>
                    </div>
                </div>
                <div class="rightPanel">
                    <img src={bullgif} alt='' />
                </div>
            </div>

            <div class="thirdSectionPicture">
                    <div class="thirdOverlay">
                        <div className="containerpad">
                        <div class="mintContainer">
                            <h1>Public Sale</h1>
                            <p class="release">Public Release On:</p>
                            <p class="release lastchild">2/28/2022</p>
                            <Clock timerDays={timerDays} timerHours={timerHours} timerMinutes={timerMinutes} timerSeconds={timerSeconds} />
                            <p class="releaseprice">Max mints of 3 per transaction and 3 per wallet</p>
                            <p class="releaseprice"><strong>"TBA" ETH + Gas Fee</strong></p>
                            <a href="Mint.js"><button>Mint<FontAwesomeIcon class='lock' icon={['fas', 'lock']} /></button></a>
                            <p class='disclaimer'>*Mint button locked until public release date</p>
                            </div>
                        </div>
                    </div>
                </div>

    </div>
    )
}

export default HomeAgain;