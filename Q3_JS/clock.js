class Clock {
    constructor(hours, minutes, seconds, country_name) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
        this.country_name = country_name;
    }

    get Hours() { return this.hours; }
    set Hours(value) { this.hours = value; }

    get Minutes() { return this.minutes; }
    set Minutes(value) { this.minutes = value; }

    get Seconds() { return this.seconds; }
    set Seconds(value) { this.seconds = value; }

    get Country_name() { return this.country_name; }
    set Country_name(value) { this.country_name = value; }

    // המרה לשניות
    ConverToSeconds() {
        const total_seconds = this.hours * 3600 + this.minutes * 60 + this.seconds;
        return `Time in seconds: ${total_seconds}`;
    }

    // הצגת השעה בפורמט hh:mm:ss
    Show() {
        const formattedTime = `${this.hours.toString().padStart(2, '0')}:${this.minutes.toString().padStart(2, '0')}:${this.seconds.toString().padStart(2, '0')}`;
        return `Time in ${this.country_name}: ${formattedTime}`;
    }
}

document.getElementById("btn_clock").onclick = function () {
    const hour = parseInt(document.getElementById("inp_hour").value, 10);
    const minute = parseInt(document.getElementById("inp_minute").value, 10);
    const second = parseInt(document.getElementById("inp_second").value, 10);
    const country_name = document.getElementById("inp_country_name").value;

    if (!window.clocks) {
        window.clocks = [];
    }

    const clock = new Clock(hour, minute, second, country_name);
    alert("Clock created successfully!");

    window.clocks.push(clock);

    // אם יש מעל 4 שעונים, מציג את התוצאות
    if (window.clocks.length > 4) {
        const lastClock = window.clocks[window.clocks.length - 1];
        const output = document.getElementById("output");

        output.innerHTML = `
            ${lastClock.Show()}<br>
            ${lastClock.ConverToSeconds()}
        `;
    }
};
