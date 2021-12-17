import React, { useState, useEffect } from 'react';
import './Retry.css';
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
import transparentbull from './assets/images/transparentbull.png'
import astrobull from './assets/images/astrobull.png'

function Retry() {

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

    const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

    accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {
    
    // Uncomment in case you only want to allow for the display of only one collapsed item at a time!
    
    // const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
    // if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
    //   currentlyActiveAccordionItemHeader.classList.toggle("active");
    //   currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    // }

    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }
    
  });
});

    return (

    <div class='whole'>

        <div className="nav">
            <a href="https://metabulls.com" ><img class="navImg" src={logoish} alt="" /></a>
            <div className="navMenu">
                <a href="#about" class='navmenu'>ABOUT</a>
                <a href="#roadmap" class='navmenu'>ROADMAP</a>
                <a href="#team" class='navmenu'>TEAM</a>
                <a href="#faq" class='navmenu'>FAQ</a>
                <a href="https://metabulls.com" class='navmenu'>MINT</a>
            </div>
        </div>

        <div className="mainScreen">
            <div className="topDivs">
                <h1>OWN,TRADE,GAIN PERKS AND EARN WITH META BULLS</h1>
                <Clock timerDays={timerDays} timerHours={timerHours} timerMinutes={timerMinutes} timerSeconds={timerSeconds} />
                <a href="/Mint.js" class='mintButtonOne' target='_blank' rel='noreferrer'>MINT<FontAwesomeIcon class='lock' icon={['fas', 'lock']} /></a>
                <a href="https://discord.gg/QetE7BEJQZ" class='discordButton' target='_blank' rel='noreferrer'><FontAwesomeIcon class='discord' icon={['fab', 'discord']} />JOIN OUR DISCORD</a>
            </div>
            <div className="gridImg">
                <img src={astrobull} alt="" class='gridImgAstro'/>
            </div>
            <div className="bottomDivs">
            <a href="https://twitter.com/MetaBullsNFT" target="_blank" rel="noreferrer" class='twitterButton'><FontAwesomeIcon class='twitter' icon={['fab', 'twitter']} /></a>
            <a href="https://instagram.com/metabullsnft/" target="_blank" rel="noreferrer" class='instagramButton'><FontAwesomeIcon class='instagram' icon={['fab', 'instagram']} /></a>
            </div>
        </div>
        
        <div className="aboutSection" id='about'>
            <img src={transparentbull} alt="" class='transparentbull'/>
            <div>
                <h1>ABOUT</h1>
                <p>The birth of VOXXTIES to the metaverse is about introducing a new generation to a world of their own. The idea is to build a virtual lineage by acquiring two 
                    VOXXTIES to breed baby VOXXTIES. Your baby VOXXTIES can then be utilized to unlock missions, engage in battles and play to earn all within the Metaverse.</p>
                <a href="https://google.com">GET WHITELISTED</a>
            </div>
            <img src={astrobull} alt="" class='astrobull' />
        </div>

        <div className="comboSection">
            <img src={bullgif} alt="" class='bullgif' />
            <div className="combo">
                <div className="circle">
                    <h1>5,000</h1>
                    <p>BULLS</p>
                </div>
                <div className="circle">
                    <h1>2,982,102</h1>
                    <p>COMBINATIONS</p>
                </div>
                <div className="circle">
                    <h1>0.01/0.02</h1>
                    <p>ETH</p>
                </div>
                <div className="circle">
                    <h1>100+</h1>
                    <p>TRAITS</p>
                </div>
            </div>
        </div>


        <div id='roadmap'className="phaseSection">

            <h1 class='phaseh1'>ROADMAP</h1>
            <div className="phases">
            <div className="phase imgfirst">
                <img src={transparentbull} alt="" class='phaseimg' />
                <div className="phaseText">
                    <h1>PHASE 1</h1>
                    <p class='phaseP'>PRESALE</p>
                    <p>Upon fufilment of the whitelist, special members who have been involved within the community will be 
                        given priority access to the presale launch.
                    </p>
                </div>
            </div>
            <div className="phase imglast">
                <img src={astrobull} alt="" class='phaseimg' />
                <div className="phaseText">
                    <h1>PHASE 2</h1>
                    <p class='phaseP'>RELEASE DAY</p>
                    <p>We unleash 5,000 Meta Bulls onto the Ethereum blockchain! After days of countless wait your spot in our community will be open!</p>
                </div>
            </div>
            <div className="phase imgfirst">
                <img src={transparentbull} alt="" class='phaseimg' />
                <div className="phaseText">
                    <h1>PHASE 3</h1>
                    <p class='phaseP'>MINT REVEAL</p>
                    <p>The big reveal is here. 5,000 bullish bulls will be brough to life. These bulls will gain you unique member 
                        communication and a bangin' profile pic.
                    </p>
                </div>
            </div>
            <div className="phase imglast">
                <img src={astrobull} alt="" class='phaseimg'/>
                <div className="phaseText">
                    <h1>PHASE 4</h1>
                    <p class='phaseP'>RAFFLES</p>
                    <p>After the public sale has been completed, 20% of the ETH gained will be pooled together in order to give back to original minters.
                    </p>
                </div>
            </div>
            <div className="phase imgfirst">
                <img src={transparentbull} alt="" class='phaseimg'/>
                <div className="phaseText">
                    <h1>PHASE 5</h1>
                    <p class='phaseP'>COMMUNITY BUILDING</p>
                    <p>Meta Bull's merch, member chats, brand collaborations, integration with the metaverse, raffles, and much more will be built up for the community.
                        This is only the beginning. Meta Bulls are bullish for the long term.
                    </p>
                </div>
            </div>
            </div>
        </div>

        <div id='team'className="teamSection">
        <h1 class='teamTitle'>THE TEAM</h1>
        <div className="team">
            <div className="teammate">
            <img src={transparentbull} alt="" class='teambull' />
            <h1>META</h1>
            <p>Founder</p>
            </div>
            <div className="teammate">
            <img src={astrobull} alt="" class='teambull' />
            <h1>ACE</h1>
            <p>Founder</p>
            </div>
            <div className="teammate">
            <img src={transparentbull} alt="" class='teambull' />
            <h1>JASON</h1>
            <p>Community Manager</p>
            </div>
            <div className="teammate">
            <img src={astrobull} alt="" class='teambull' />
            <h1>PEAK</h1>
            <p>Technical Developer</p>
            </div>
        </div>

        </div>


        <h1 id='faq'class='faq'>FAQ</h1>
        <div class="accordion">
  <div class="accordion-item">
    <div class="accordion-item-header">
        How many Meta Bulls can I mint at a time?
    </div>
    <div class="accordion-item-body">
      <div class="accordion-item-body-content">
        5 per wallet and 5 per transaction.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <div class="accordion-item-header">
        What is the mint price?
    </div>
    <div class="accordion-item-body">
      <div class="accordion-item-body-content">
        0.1 for presale/whitelist and 0.2 for public sale.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <div class="accordion-item-header">
        When does miniting start?
    </div>
    <div class="accordion-item-body">
      <div class="accordion-item-body-content">
        <p>Dates are TBA but public mint will most likely be early Febuary</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <div class="accordion-item-header">
        How do I get involved?
    </div>
    <div class="accordion-item-body">
      <div class="accordion-item-body-content">
      To get involved in the Meta Bulls NFT project, we suggest you follow our team on twitter and join our Discord Server.
       We will be posting updates every day and keeping in touch with the community.
       We will be posting essential information such as white listing, giveaways, release date and reveal date on our Discord Server and on twitter @MetaBullsNFT
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <div class="accordion-item-header">
      What can I do with my Meta Bull?
    </div>
    <div class="accordion-item-body">
      <div class="accordion-item-body-content">
       Your Meta Bull NFT is yours, you can sell, hold, incorporate it as your social media picture and more!
       We encourage our community members to keep up with us on social media and discord server to see the exclusive drops, events, and other benefits you get by having a Meta Bull NFT.
      </div>
    </div>
  </div>
        </div>


        <div className="actionSection">
    <h1>JOIN THE ORGANIZATION</h1>
    <p>
        Ladies and Gentlemen. 
        Join the Discord and the Telegram to participate to exclusive events/giveaways and get all the news as soon as possible. 
        Aim bullish and join the Meta Bulls!
    </p>
    <a href="https://discord.gg/QetE7BEJQZ"><button class='joinDiscord'>Join our Discord</button></a>
    <a href="https://google.com"><button class='comingSoon'>Coming Soon!</button></a>
        </div>


        <div className="footerSection">
    <a href="https://metabulls.com"><img src={logoish} alt="" class='footerLogo'/></a>
    <p class='footerPraise'>OWN, TRADE, WIN, and EARN WITHIN THE META BULL COMMUNITY</p>
    <p class='smartcontractText'>SMART CONTRACT</p>
    <p className="smartcontractCode">0x00000000000</p>
    <p class='smartcontractText'>FOLLOW US ON</p>
    <div className="footerSocial">
    <a href="https://discord.gg/QetE7BEJQZ" target="_blank" rel="noreferrer" class='discordButtonFooter'><FontAwesomeIcon class='socialmediaFooter discordFooter' icon={['fab', 'discord']} /></a>
    <a href="https://twitter.com/MetaBullsNFT" target="_blank" rel="noreferrer" class='twitterButtonFooter'><FontAwesomeIcon class='socialmediaFooter twitterFooter' icon={['fab', 'twitter']} /></a>
    <a href="https://instagram.com/metabullsnft/" target="_blank" rel="noreferrer" class='instagramButtonFooter'><FontAwesomeIcon class='socialmediaFooter instagramFooter' icon={['fab', 'instagram']} /></a>
    </div>
        </div>

    </div>
    )
}

export default Retry;