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

function emptyValues() {
    document.getElementById("inp_hour").value = "";
    document.getElementById("inp_hour").placeholder = "Enter an hour";
    document.getElementById("inp_minute").value = "";
    document.getElementById("inp_minute").placeholder = "Enter a minute";
    document.getElementById("inp_second").value = "";
    document.getElementById("inp_second").placeholder = "Enter a second";
    document.getElementById("inp_country_name").value = "";
    document.getElementById("inp_country_name").placeholder = "Enter Country Name";
}

document.getElementById("btn_clock").onclick = function () {
    const hour = parseInt(document.getElementById("inp_hour").value, 10);
    const minute = parseInt(document.getElementById("inp_minute").value, 10);
    const second = parseInt(document.getElementById("inp_second").value, 10);
    const country_name = document.getElementById("inp_country_name").value;

    if (isNaN(hour) || hour < 0 || hour > 23) {
        alert("Please enter a valid hour between 0 and 23.");
        return;
    }
    if (isNaN(minute) || minute < 0 || minute > 59) {
        alert("Please enter a valid minute between 0 and 59.");
        return;
    }
    if (isNaN(second) || second < 0 || second > 59) {
        alert("Please enter a valid second between 0 and 59.");
        return;
    }
    if (!country_name.trim()) {
        alert("Please enter a country name.");
        return;
    }

    emptyValues();

    if (!window.clocks) {
        window.clocks = [];
    }

    const clock = new Clock(hour, minute, second, country_name);
    alert("Clock created successfully!");

    window.clocks.push(clock);

    // אם יש מעל 4 שעונים, מציג את התוצאות
    if (window.clocks.length > 4) {
        const output = document.getElementById("output");

        clocks.forEach((clock) => {
            output.innerHTML += `${clock.Show()}<br />${clock.ConverToSeconds()}<br />`;
        });

    }
};
