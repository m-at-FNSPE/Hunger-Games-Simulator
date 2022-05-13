


let test = []





class Action{

    static {test.push(this)}

    do(){
        throw Error("Must be implemented")
    }

}


class HammerKill extends Action{
    static {test.push(this)}
    do(){
        "A kills b"
    }
}


class Arrowkill extends Action{


    do(){
        "A kills b"
    }
}