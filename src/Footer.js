import React from 'react';
import './Retry.css';
import logoish from './assets/images/logoish.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {

    return(
        <div className="footerSection">
            <a href="https://metabullsnft.com"><img src={logoish} alt="" class='footerLogo'/></a>
            <p class='footerPraise'>OWN, TRADE, WIN, and EARN WITHIN THE META BULL COMMUNITY</p>
            <p class='smartcontractText'>SMART CONTRACT</p>
            <p className="smartcontractCode">0x2a0043748fedb83dA0F603E4843878DfD6428B67</p>
            <p class='smartcontractText'>FOLLOW US ON</p>
            <div className="footerSocial">
                <a href="https://discord.gg/QetE7BEJQZ" target="_blank" rel="noreferrer" class='discordButtonFooter'><FontAwesomeIcon class='socialmediaFooter discordFooter' icon={['fab', 'discord']} /></a>
                <a href="https://twitter.com/MetaBullsNFT" target="_blank" rel="noreferrer" class='twitterButtonFooter'><FontAwesomeIcon class='socialmediaFooter twitterFooter' icon={['fab', 'twitter']} /></a>
                <a href="https://instagram.com/metabullsnft/" target="_blank" rel="noreferrer" class='instagramButtonFooter'><FontAwesomeIcon class='socialmediaFooter instagramFooter' icon={['fab', 'instagram']} /></a>
            </div>
        </div>
        
    )
}

export default Footer;