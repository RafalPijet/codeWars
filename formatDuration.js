/*Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

It is much easier to understand with an example:

formatDuration(62)    // returns "1 minute and 2 seconds"
formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"
For the purpose of this Kata, a year is 365 days and a day is 24 hours.

Note that spaces are important.

Detailed rules
The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.

 */

const formatDuration = seconds => {
    let years = 0;
    let days = 0;
    let hours = 0;
    let minutes = 0;
    let secondsResult = 0;

    if (seconds > 0 && seconds < 60) {
        secondsResult = seconds
    } else if (seconds >= 60 && seconds < 3600) {
        minutes = Math.floor(seconds / 60);
        secondsResult = seconds % 60;
    } else if (seconds >= 3600 && seconds < 86400) {
        hours = Math.floor(seconds / 3600);
        let rest = seconds % 3600;

        if (rest >= 60) {
            minutes = Math.floor(rest / 60);
            secondsResult = rest % 60
        } else {
            secondsResult = rest
        }
    } else if (seconds >= 86400 && seconds < 31536000) {
        days = Math.floor(seconds / 86400);
        let rest = seconds % 86400;

        if (rest >= 3600 && rest < 86400) {
            hours = Math.floor((rest / 3600));
            let restSeconds = rest % 3600;

            if (restSeconds > 60) {
                minutes = Math.floor(restSeconds / 60);
                secondsResult = restSeconds % 60
            } else {
                secondsResult = restSeconds;
            }
        } else {
            minutes = Math.floor(rest / 60);
            secondsResult = rest % 60;
        }
    } else if (seconds >= 31536000) {
        years = Math.floor(seconds / 31536000);
        let rest = seconds % 31536000;

        if (rest >= 86400 && rest < 31536000) {
            days = Math.floor(rest / 86400);
            let restSeconds = rest % 86400;

            if (restSeconds >= 3600 && restSeconds < 86400) {
                hours = Math.floor(restSeconds / 3600);
                let moreSeconds = restSeconds % 3600;

                if (moreSeconds > 60) {
                    minutes = Math.floor(moreSeconds /60);
                    secondsResult = moreSeconds % 60
                } else {
                    secondsResult = moreSeconds
                }
            } else {
                minutes = Math.floor(restSeconds / 60);
                secondsResult = restSeconds % 60
            }
        } else {
            hours = Math.floor(rest / 3600);
            let restSeconds = rest % 3600;

            if (restSeconds >= 60) {
                minutes = Math.floor(restSeconds / 60);
                secondsResult = restSeconds % 60;
            } else {
                secondsResult = restSeconds;
            }
        }
    }
    years = parseInt(years);
    let yearsResult = years !== 0 ? years : '';

    if (typeof yearsResult !== 'string') {
        yearsResult > 1 ? yearsResult += ' years,' : yearsResult += ' year,';
    }
    days = parseInt(days);
    let daysResult = days !== 0 ? days : '';

    if (typeof daysResult !== 'string') {
        daysResult > 1 ? daysResult += ' days,' : daysResult += ' day,';
    }
    hours = parseInt(hours);
    let hoursResult = hours !== 0 ? hours : '';

    if (typeof hoursResult !== 'string') {
        hoursResult > 1 ? hoursResult += ` ${secondsResult === 0 ? 'hours' : 'hours,'}` : hoursResult += ` ${secondsResult === 0 ? 'hour' : 'hour,'}`;
    }
    minutes = parseInt(minutes);
    let minutesResult = minutes !== 0 ? minutes : '';

    if (typeof minutesResult !== 'string') {

        if (minutesResult > 1 && secondsResult !== 0) {
            minutesResult += ' minutes';
        } else if (minutesResult === 1 && secondsResult !== 0) {
            minutesResult += ' minute';
        } else if (years === 0 && days === 0 && hours === 0 && secondsResult === 0) {
            minutesResult > 1 ? minutesResult = `${minutesResult} minutes` : minutesResult = `${minutesResult} minute`;
        } else if (secondsResult === 0) {
            minutesResult > 1 ?  minutesResult = `and ${minutesResult} minutes` : minutesResult = `and ${minutesResult} minute`;
        }
    }
    secondsResult = parseInt(secondsResult);
    let resultSeconds = secondsResult !== 0 ? secondsResult : '';

    if (typeof resultSeconds !== 'string') {

        if (resultSeconds > 1 && minutesResult.length !== 0) {
            resultSeconds = 'and ' + resultSeconds + ' seconds'
        } else if (resultSeconds <= 1 && minutesResult.length !== 0) {
            resultSeconds = 'and ' + resultSeconds + ' second'
        } else if (resultSeconds > 1 && minutesResult.length === 0) {
            resultSeconds = resultSeconds + ' seconds'
        } else if (resultSeconds <= 1 && minutesResult.length === 0) {
            resultSeconds = resultSeconds + ' second'
        }
    }
    return seconds !== 0 ? `${yearsResult} ${daysResult} ${hoursResult} ${minutesResult} ${resultSeconds}`.trim() : 'now';
};

// console.log(formatDuration(120));
console.log(formatDuration(132030240));
