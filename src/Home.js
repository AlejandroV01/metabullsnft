import React, {useState, useEffect} from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import bullgif from './assets/images/bullgif.gif'
import Clock from './components/Clock'


function Home(){
    const [timerDays, setTimerDays] = useState();
    const [timerHours, setTimerHours] = useState();
    const [timerMinutes, setTimerMinutes] = useState();
    const [timerSeconds, setTimerSeconds] = useState();

    let interval;

    const startTimer=()=>{
        const countDownDate= new Date("December 28,2021 ").getTime();

        interval=setInterval(()=>{
            const now = new Date().getTime();

            const distance = countDownDate - now;

            const days = Math.floor(distance / (24 * 60 * 60 * 1000));
            const hours = Math.floor((distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
            const seconds = Math.floor((distance % (60 * 1000)) / 1000);

            if(distance<0){
                //stop Timer

                clearInterval(interval.current);
            }else{
                // Update timer
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        })
    };

    useEffect(()=> {
        startTimer();
    });
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
                
            </section>
            <div class="nav container sticky">
                    <a href="/home.js"><img class="navImg" src="./Bullbanner.png" alt=""/></a>
                    <a href="/home.js">Roadmap</a>
                    <a href="/home.js">Mint</a>
                    <a href="/home.js">Rarity</a>
                    <a href="/home.js">Team</a>
                    <a href="/home.js">FAQ</a>
                    <span></span>
                    <a href="https://www.google.com" target="_blank" class= 'discord'><FontAwesomeIcon class= 'discord' icon={['fab', 'discord']} /></a>
                    <a href="https://twitter.com/MetaBullsNFT" target="_blank" class= 'twitter'><FontAwesomeIcon class= 'twitter' icon={['fab', 'twitter']} /></a>
                    <a href="https://instagram.com/metabullsnft/" target="_blank" class= 'instagram'><FontAwesomeIcon class= 'instagram' icon={['fab', 'instagram']} /></a>
            </div>


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
                            <p class="release">Public Release On:</p>
                            <p class="release lastchild">12/28/2021</p>
                            <Clock timerDays = {timerDays} timerHours = {timerHours} timerMinutes = {timerMinutes} timerSeconds = {timerSeconds}/>
                            <p class="releaseprice">Max mints of 3 per transaction and 3 per wallet</p>
                            <p class="releaseprice"><strong>"TBA" ETH + Gas Fee</strong></p>
                            <a href="Mint.js"><button>Mint</button></a>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default Home;