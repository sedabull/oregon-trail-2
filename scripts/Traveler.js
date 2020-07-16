class Traveler {

    constructor(name) {
        this.name = name;
        this.food = 1;
        this.isHealthy = true;
    }//end constructor

    hunt() {
        this.food += 2;
    }//end hunt

    eat() {
        if(this.food > 0) {
            this.food--;
            if(!this.food) {
                this.isHealthy = false;
            }//end if
        }//end if
    }//end eat

}//end class Traveler