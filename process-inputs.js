export function validateTime(time) {
    const time_regex = /^(1[012]|[1-9]):([0-5][0-9])\s?(am|pm)$/i;
    if (time_regex.test(time) || time === '*') {
        return true
    }
    else {
        return "Please enter a valid time";
    }
}

export function validateYear(year) {
    const current_year = new Date().getFullYear();
    const yearRegex = /^([12][0-9][0-9][0-9])$/
    if (year < current_year) {
        return 'Please enter a valid Year'
    }
    if (!yearRegex.test(year)) {
        return 'Please enter a valid Year'
    }
    if (year === '*') {
        return true
    }
    return true
}

export function validateDate(date) {
    if (date < 1 || date > 31) {
        return 'Please enter a valid Date'
    }
    if (date === '*') {
        return true
    }
    return true
}

export function isDateValid(answers) {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    if (answers.year != '*' && answers.month != '*') {
        const givenDate = new Date(answers.year, answers.month - 1, answers.date);
        if (givenDate < currentDate) {
            return 'Given date is previous'
        }
    }
    return true
}

export function convertToGMT(timeString) {
    let date = new Date(`01/01/2022 ${timeString}`);
    let options = { hour: '2-digit', minute: '2-digit', hour12: false };
    let formattedTime = new Intl.DateTimeFormat('en-GB', options).format(date);
    const timeParts = formattedTime.split(':');
    let hours = parseInt(timeParts[0], 10) - 5;
    let minutes = parseInt(timeParts[1], 10) - 30;
    if (minutes < 0) {
        minutes += 60;
        hours--;
    }
    if (hours < 0) {
        hours += 24;
    }
    return {
        hour: hours,
        minute: minutes
    }
}

export function processOutput(answers){
    if (answers.schedule_type === 'no_range'){
        const time = convertToGMT(answers.time);
        const output = `${time.minute} ${time.hour} ${answers.date} ${answers.month} *`
        return output
    }
}