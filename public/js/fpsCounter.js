class FpsCounter {
    constructor() {
        this.times = [];
        this.fps = 0;

        //the interval of time between each update to the value of fps
        this.updateInterval = 700;

        //tracks the time at which fps gets updated
        this.threshold = this.updateInterval;
    }

    track() {
        const now = performance.now();
        while (this.times.length > 0 && this.times[0] <= now - 1000) { this.times.shift(); }
        this.times.push(now);
        if(now > this.threshold) {
            //increment the threshold to the next interval
            this.threshold += this.updateInterval;
            this.fps = this.times.length;
        }
    }

    display() { document.getElementById('tracker').innerHTML = 'fps: ' + this.fps; }
}