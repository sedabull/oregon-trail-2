class Doctor extends Traveler {

    constructor(name) {
        super(name);
    }//end constructor

    heal(traveler) {
        traveler.isHealthy = true;
    }//end heal

}//end class Doctor