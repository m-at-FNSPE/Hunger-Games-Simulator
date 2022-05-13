
class Reaping{
    static listRandomFirstNames = ["Harry","Ross","Bruce","Cook","Carolyn","Morgan","Albert","Walker","Randy","Reed","Larry","Barnes","Lois","Wilson","Jesse","Campbell","Ernest","Rogers","Theresa","Patterson","Henry","Simmons","Michelle","Perry","Frank","Butler","Shirley"]
    static listRandomLastNames = ["Ruth","Jackson","Debra","Allen","Gerald","Harris","Raymond","Carter","Jacqueline","Torres","Joseph","Nelson","Carlos","Sanchez","Ralph","Clark","Jean","Alexander","Stephen","Roberts","Eric","Long","Amanda","Scott","Teresa","Diaz","Wanda","Thomas"]
    static listOfRandomPronouns = ["he/him", "she/her", "they/them"]

    constructor(){
        this.changeNumberOfContestantsToEqualTheSelectedValue()
        document.getElementById("howManyContestants").addEventListener("change", this.changeNumberOfContestantsToEqualTheSelectedValue.bind(this))
        document.getElementById("generateRandom").addEventListener("click", this.fillWithRandomContestants.bind(this))
        document.getElementById("assignTeams").addEventListener("click", this.assignRandomTeams.bind(this))
        document.getElementById("clear").addEventListener("click", this.clearForm.bind(this))
        document.getElementById("submitContestants").addEventListener("click", this.submitForm.bind(this))
    }

    pushNewContestantField(){
        const contestantDiv = document.getElementById("selectionOfIndividualContestants")
        const newDiv = document.createElement("div");

        let currentNumberOfNodes = document.getElementById("selectionOfIndividualContestants").childNodes.length

        newDiv.id = "contestant" + currentNumberOfNodes

        newDiv.innerHTML =
            `<form class="contestantForm" id="${newDiv.id}Form ">
                <label for="name${newDiv.id}"> Name: </label>
                <input type="text" name="name" id="name${newDiv.id}" >
                
                <label for="pronouns${newDiv.id}"> Pronouns: </label>
                <input type="text" name="pronouns" id="pronouns${newDiv.id}" >
                
                <label for="imageURL${newDiv.id}"> URL with image: </label>
                <input type="url" name="imageURL" id="imageURL${newDiv.id}" >
                
                <label for="team${newDiv.id}"> Team: </label>
                <input type="text" name="team" id="team${newDiv.id}" >
                
                <label for="attitude${newDiv.id}"> Attitude: </label>
                <select name="attitude" id="attitude${newDiv.id}" >
                    <option value="random">Random</option>
                    <option value="Placeholder">Placeholder</option>
                    <option value="Placeholder">Placeholder</option>
                    <option value="Placeholder">Placeholder</option>
                    <option value="Placeholder">Placeholder</option>
                </select>
            </form>`

        contestantDiv.appendChild(newDiv)
    }
    popLastContestantField(){
        const contestantDiv = document.getElementById("selectionOfIndividualContestants")
        contestantDiv.removeChild(contestantDiv.lastChild)
    }

    changeNumberOfContestantsToEqualTheSelectedValue(){
        let howManyContestants = document.getElementById("howManyContestants").value
        let currentNumberOfNodes = document.getElementById("selectionOfIndividualContestants").childNodes.length
        let change = howManyContestants - currentNumberOfNodes + 1
        if (change > 0){
            for(let i = 0; i < change; i++){
                this.pushNewContestantField()
            }
        }
        else if (change < 0){
            for(let i = 0; i > change; i--){
                this.popLastContestantField()
            }
        }
    }

    static generateRandomName(){
        let firstName = randomArrayElement(this.listRandomFirstNames)
        let lastName = randomArrayElement(this.listRandomLastNames)

        return firstName + " " + lastName
    }

    fillWithRandomContestants(){
        let listOfForms = document.getElementById("selectionOfIndividualContestants").children

        for(let i = 0; i < listOfForms.length; i++){
            let currentForm = listOfForms[i].firstChild
            currentForm.children.namedItem("name").value = Reaping.generateRandomName()

            currentForm.children.namedItem("pronouns").value = randomArrayElement(Reaping.listOfRandomPronouns)

            currentForm.children.namedItem("attitude").value = "random"
        }
    }

    assignRandomTeams(){
        let NumberOfTeams = document.getElementById("numberOfTeams").value
        let listOfForms = document.getElementById("selectionOfIndividualContestants").children

        let NumberOfMembersPerTeam = Math.floor(listOfForms.length / NumberOfTeams)
        for(let i = 0; i < NumberOfTeams; i++) {
            for (let j = 0; j < NumberOfMembersPerTeam; j++) {
            let currentForm = listOfForms[i*NumberOfMembersPerTeam + j].firstChild
            currentForm.children.namedItem("team").value = "Team " + (i + 1)
            }
        }
        for(let i = NumberOfMembersPerTeam*NumberOfTeams; i < listOfForms.length; i++) {
            let currentForm = listOfForms[i].firstChild
            currentForm.children.namedItem("team").value = ""
        }

    }

    clearForm(){
        let listOfForms = document.getElementById("selectionOfIndividualContestants").children

        for(let i = 0; i < listOfForms.length; i++){
            let currentForm = listOfForms[i].firstChild
            currentForm.children.namedItem("name").value = ""
            currentForm.children.namedItem("imageURL").value = ""
            currentForm.children.namedItem("pronouns").value = ""
            currentForm.children.namedItem("team").value = ""
            currentForm.children.namedItem("attitude").value = "random"
        }

    }


    submitForm(){
        tributes = this.createListOfContestantsFromForm()
    }


    createListOfContestantsFromForm(){
        let listOfForms = document.getElementById("selectionOfIndividualContestants").children

        let result = new AllTributes()

        for(let i = 0; i < listOfForms.length; i++){
            let currentForm = listOfForms[i].firstChild
            let name = currentForm.children.namedItem("name").value
            let imageURL = currentForm.children.namedItem("imageURL").value
            let pronouns = currentForm.children.namedItem("pronouns").value
            let attitude = currentForm.children.namedItem("attitude").value
            let team = currentForm.children.namedItem("team").value
            result.push(new Tribute(name, imageURL, pronouns,attitude,team))
        }

        return result
    }




}






