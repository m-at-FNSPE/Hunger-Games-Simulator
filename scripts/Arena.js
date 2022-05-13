

class Arena{

    static EventList = ["Flood", "Bees"]

    timeIndex
    currentEvent

    constructor() {
        this.timeIndex = 0
        this.currentEvent = "Reaping"
    }

    Advance(){
        this.timeIndex++
        this.currentEvent = this.NewEvent()


    }



    NewEvent(){
        switch (this.timeIndex % 3) {
            case 1:
                return "Day"
            case 2:
                return Arena.pickRandomEvent()
            case 3:
                return "Night"
        }
    }



    static pickRandomEvent(){
        return randomArrayElement(Arena.EventList)
    }

}