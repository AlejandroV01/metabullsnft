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
import graylinevertical from './assets/images/graylinevertical.png'

function HomeAgain() {
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

        <div class='whole'>

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
            
    </div>
    )
}

export default HomeAgain;