import React, { useState, useEffect } from "react";

const dateFrom = new Date('2022-10-01T16:00:00.000Z')

function treatAsUTC(date) {
    var result = new Date(date);
    result.setMinutes(result.getMinutes() - result.getTimezoneOffset());
    return result;
}

function daysBetween(startDate, endDate) {
    var millisecondsPerDay = 24 * 60 * 60 * 1000;

    var d = Math.abs(endDate - startDate) / 1000;                           // delta
    var r = {};                                                                // result
    var s = {                                                                  // structure
        year: 31536000,
        month: 2592000,
        day: 86400,   // feel free to add your own row
        hour: 3600,
        minute: 60,
        second: 1
    };

    Object.keys(s).forEach(function (key) {
        r[key] = Math.floor(d / s[key]);
        d -= r[key] * s[key];
    });

    return r;
}

function Countdown() {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [dateDiff, setMinutesDiff] = useState(
        daysBetween(currentDate, dateFrom)
    );

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setCurrentDate(new Date());
        }, 1000);

        return () => clearTimeout(timeoutId);
    }, [currentDate]);

    useEffect(() => {
        setMinutesDiff(daysBetween(currentDate, dateFrom));
    }, [currentDate, dateFrom]);

    return (
        <>
            <h2 className='button date'>Pozostało: <br></br>
                {dateDiff.month} miesięcy <br></br>
                {dateDiff.day} dni <br></br>
                {dateDiff.hour} godzin <br></br>
                {dateDiff.minute} minut <br></br>
                {dateDiff.second} sekund 
                !</h2>
        </>
    );
}

// class DateToShow {
//     constructor(months,)
// }

export default Countdown;