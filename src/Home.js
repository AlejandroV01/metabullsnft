import React, { useState, useEffect } from 'react';
import './Home.css';
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
import graylinevertical from './assets/images/graylinevertical.png'

function Home() {
    const [timerDays, setTimerDays] = useState();
    const [timerHours, setTimerHours] = useState();
    const [timerMinutes, setTimerMinutes] = useState();
    const [timerSeconds, setTimerSeconds] = useState();

    let interval;

    const startTimer = () => {
        const countDownDate = new Date("December 28,2021 ").getTime();

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

        <div class='mainContainer'>
            <section class='firstSection'>
                <div class='mainPicture'>
                    <div class='overlay'>
                        <div class='textBoxCenter'>
                            <h1>Welcome To</h1>
                            <h1>Meta Bulls</h1>
                        </div>
                    </div>
                </div>

            </section>
            <div class="nav container sticky">
                <a href="/home.js" class='navmenu'><img class="navImg" src={logoish} alt="" /></a>
                <a href="/home.js" class='navmenu'>Roadmap</a>
                <a href="/home.js" class='navmenu'>Mint</a>
                <a href="/home.js" class='navmenu'>Rarity</a>
                <a href="/home.js" class='navmenu'>Team</a>
                <a href="/home.js" class='navmenu'>FAQ</a>
                <span></span>
                <a href="https://www.google.com" target="_blank" rel="noreferrer" class='discord'><FontAwesomeIcon class='discord' icon={['fab', 'discord']} /></a>
                <a href="https://twitter.com/MetaBullsNFT" target="_blank" rel="noreferrer" class='twitter'><FontAwesomeIcon class='twitter' icon={['fab', 'twitter']} /></a>
                <a href="https://instagram.com/metabullsnft/" target="_blank" rel="noreferrer" class='instagram'><FontAwesomeIcon class='instagram' icon={['fab', 'instagram']} /></a>
            </div>


            <section class='secondSection'>
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
            </section>

            <section class="thirdSection">
                <div class="thirdSectionPicture">
                    <div class="thirdOverlay">
                        <div className="containerpad">
                        <div class="mintContainer">
                            <h1>Public Sale</h1>
                            <p class="release">Public Release On:</p>
                            <p class="release lastchild">12/28/2021</p>
                            <Clock timerDays={timerDays} timerHours={timerHours} timerMinutes={timerMinutes} timerSeconds={timerSeconds} />
                            <p class="releaseprice">Max mints of 3 per transaction and 3 per wallet</p>
                            <p class="releaseprice"><strong>"TBA" ETH + Gas Fee</strong></p>
                            <a href="Mint.js"><button>Mint<FontAwesomeIcon class='lock' icon={['fas', 'lock']} /></button></a>
                            <p class='disclaimer'>*Mint button locked until public release date</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="fourthSection">
                {/* <div className="rarity">
                    <h1>Attributes</h1>
                    <div className="topGrid">
                        <div className="rarityObjects">
                            <img src={rarityBackground} alt=""/>
                            <p>15</p>
                            <p>Backgrounds</p>
                        </div>
                        <div className="rarityObjects">
                            <img src={rarityHair} alt="" />
                            <p>15</p>
                            <p>Hairs</p>
                        </div>
                        <div className="rarityObjects">
                            <img src={rarityNose} alt="" />
                            <p>15</p>
                            <p>Noses</p>
                        </div>
                        <div className="rarityObjects">
                            <img src={rarityHorn} alt="" />
                            <p>15</p>
                            <p>Horns</p>
                        </div>
                        <div className="rarityObjects">
                            <img src={rarityEye} alt="" />
                            <p>15</p>
                            <p>Eyes</p>
                        </div>
                    </div>
                    <div className="bottomGrid">
                        <div className="rarityObjects">
                            <img src={rarityHat} alt="" class='rarityhat'/>
                            <p>15</p>
                            <p>Hats</p>
                        </div>
                        <div className="rarityObjects">
                            <img src={rarityEaring} alt="" />
                            <p>15</p>
                            <p>Earrings</p>
                        </div>
                        <div className="rarityObjects">
                            <img src={rarityClothe} alt="" />
                            <p>15</p>
                            <p>Clothes</p>
                        </div>
                        <div className="rarityObjects">
                            <img src={rarityMouth} alt="" />
                            <p>15</p>
                            <p>Mouths</p>
                        </div>
                    </div>
                    
                </div> */}

                <h1>Roadmap</h1>
                <div className="roadmap">
                    <div className="roadmapRow roadmapone">
                        <div>0%</div>
                        <img src={graylinevertical} alt="" />
                        <p>Take a seat, join other fellow Octos on Discord, and start sharpening your skills for the treasure hunt. We will be raffling 5 Octos once we reach 5,000 members on Discord.</p>
                    </div>
                    <div className="roadmapRow">
                        <div>20%</div>
                        <img src={graylinevertical} alt=""/>
                        <p>Take a seat, join other fellow Octos on Discord, and start sharpening your skills for the treasure hunt. We will be raffling 5 Octos once we reach 5,000 members on Discord.</p>
                    </div>
                    <div className="roadmapRow">
                        <div>40%</div>
                        <img src={graylinevertical} alt="" />
                        <p>Take a seat, join other fellow Octos on Discord, and start sharpening your skills for the treasure hunt. We will be raffling 5 Octos once we reach 5,000 members on Discord.</p>
                    </div>
                    <div className="roadmapRow">
                        <div>60%</div>
                        <img src={graylinevertical} alt="" />
                        <p>Take a seat, join other fellow Octos on Discord, and start sharpening your skills for the treasure hunt. We will be raffling 5 Octos once we reach 5,000 members on Discord.</p>
                    </div>
                    <div className="roadmapRow">
                        <div>80%</div>
                        <img src={graylinevertical} alt="" />
                        <p>Take a seat, join other fellow Octos on Discord, and start sharpening your skills for the treasure hunt. We will be raffling 5 Octos once we reach 5,000 members on Discord.</p>
                    </div>
                    <div className="roadmapRow roadmaplast">
                        <div>100%</div>
                        <img src={graylinevertical} alt="" />
                        <p>Take a seat, join other fellow Octos on Discord, and start sharpening your skills for the treasure hunt. We will be raffling 5 Octos once we reach 5,000 members on Discord.</p>
                    </div>
                </div>
            </section>

            <section className="fifthSection">

            </section>
        </div>
    )
}

export default Home;