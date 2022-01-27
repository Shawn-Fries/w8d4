class Clock {
    constructor() {
        this.date = new Date();
        this.hours = this.date.getHours();
        this.minutes = this.date.getMinutes();
        this.seconds = this.date.getSeconds();
        this.printTime();   // 3. Call printTime.
        this.boundTick = this._tick.bind(this);
        setInterval(this.boundTick, 1000);      // 4. Schedule the tick at 1 second intervals.
    }

    printTime() {
        // Format the time in HH:MM:SS
        // Use console.log to print it.
        let time = `${this.hours}:${this.minutes}:${this.seconds}`;
        console.log(time);
    }

    _tick() {
        // 1. Increment the time by one second.
        // 2. Call printTime.
        this.seconds += 1;
        //console.log(this.seconds);
        if (this.seconds === 60) {
            this.seconds = 0;
        }
       //console.log(this.seconds);
        if (this.seconds === 0) {
            this.minutes += 1;
        }
        if (this.minutes === 60) {
            this.minutes = 0;
        }
        if (this.minutes === 0) {
            this.hours += 1;
        }
        if (this.hours === 24) {
            this.hours = 0;
        }
        //console.log(this);
        this.printTime();
    }
}

const clock = new Clock();
//console.log(clock.date);
//console.log(clock.hours);