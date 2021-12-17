import React, { Fragment } from 'react';

const Clock = ({ timerDays, timerHours, timerMinutes, timerSeconds }) => {
    return <Fragment>
        <section className="timer-container">
            <section className="timer">

                <div className="clock">
                    <section>
                        <p>{timerDays}</p>
                        <small>DAYS</small>
                    </section>
                    
                    <section>
                        <p>{timerHours}</p>
                        <small>HRS</small>
                    </section>
                    
                    <section>
                        <p>{timerMinutes}</p>
                        <small>MIN</small>
                    </section>
                    {/* <span>:</span> */}
                    <section>
                        <p>{timerSeconds}</p>
                        <small>SEC</small>
                    </section>
                </div>
            </section>

        </section>

    </Fragment>;
};

Clock.defaultProps={
    timerDays:10,
    timerHours:10,
    timerMinutes:10,
    timerSeconds:10,
}
export default Clock;