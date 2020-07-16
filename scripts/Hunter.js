class Hunter extends Traveler {

    constructor(name) {
        super(name);
        this.food = 2;
    }//end constructor

    hunt() {
        this.food += 5;
    }//end hunt

    eat() {
        if(this.food >= 2) {
            this.food -= 2;
            if(!this.food) {
                this.isHealthy = false;
            }//end if
        } else {
            this.food = 0;
            this.isHealthy = false;
        }//end if/else
    }//end eat

    giveFood(traveler, amount) {
        if(amount <= this.food) {
            this.food -= amount;
            traveler.food += amount;
        }//end if
    }//end giveFood

}//end class Hunter