class Wagon {

    constructor(capacity) {
        this.capacity = capacity;
        this.passengers = [];
    }//end constructor

    totalFood() {
        return this.passengers.reduce((acc, cur) => acc + cur.food, 0); 
    }//end totalFood

    join(traveler) {
        if(this.passengers.length < this.capacity) this.passengers.push(traveler);
    }//end join

    shouldQuarantine() {
        return this.passengers.some(traveler => !traveler.isHealthy);
    }//end shouldQuarantine

    getAvailableSeatCount() {
        return this.capacity - this.passengers.length;
    }//end getAvailableSeatCount

}//end class Wagon