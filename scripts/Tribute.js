class Tribute {

    _TributeID
    _Kills
    _Alive

    get Kills() {
        return this._Kills;
    }

    set Kills(value) {
        this._Kills = value;
    }

    get TributeID() {
        return this._TributeID;
    }

    get Alive(){
        return this._Alive
    }

    constructor(fullName, imageLink, pronoun, DefaultTeam) {
        this._TributeID = new TributeID(fullName, imageLink, pronoun, DefaultTeam)
        this.Kills = 0
        this._Alive = true
    }
}





class TributeID {
    _fullName; _imageLink; _subjectPronoun; _objectPronoun; _DefaultState; _DefaultTeam



    get fullName() {
        return this._fullName;
    }

    get imageLink() {
        return this._imageLink;
    }

    get DefaultState() {
        return this._DefaultState;
    }

    get DefaultTeam() {
        return this._DefaultTeam;
    }

    get subjectPronoun() {
        return this._subjectPronoun;
    }

    get objectPronoun() {
        return this._objectPronoun;
    }

    constructor(fullName, imageLink, pronoun, DefaultState, DefaultTeam) {  //Arguments are based on the form
        this._subjectPronoun = TributeID.setSubjectPronoun(pronoun)
        this._objectPronoun = TributeID.setObjectPronoun(pronoun)
        this._fullName = fullName;
        this._imageLink = TributeID.setImageLink(imageLink);
        this._DefaultState = DefaultState;
        this._DefaultTeam = DefaultTeam;
    }

    static setSubjectPronoun(pronoun) {
        return pronoun.split("/")[0]
    }

    static setObjectPronoun(pronoun) {
        return pronoun.split("/")[1]
    }


    static setImageLink(imageLink) {
        if (! imageLink){
            return "img/DefaultTributeImage.png"
        }
        return imageLink;
    }
}