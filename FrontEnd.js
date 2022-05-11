
class Reaping{
    constructor(){
        this.ChangeNumberOfContestantsToEqualTheSelectedValue()
        document.getElementById("HowManyContestants").addEventListener("change", this.ChangeNumberOfContestantsToEqualTheSelectedValue.bind(this))
    }

    PushNewContestantField(){
        const ContestantDiv = document.getElementById("SelectionOfIndividualContestants")
        const NewDiv = document.createElement("div");

        let currentNumberOfNodes = document.getElementById("SelectionOfIndividualContestants").childNodes.length

        NewDiv.id = "Contestant" + currentNumberOfNodes

        NewDiv.innerHTML =
            `<form class="ContestantForm" id="${NewDiv.id}Form ">
                <label for="Name${NewDiv.id}"> Name: </label>
                <input type="text" name="Name" id="Name${NewDiv.id}" >
                
                <label for="Pronouns${NewDiv.id}"> Pronouns: </label>
                <input type="text" name="Pronouns" id="Pronouns${NewDiv.id}" >
                
                <label for="ImageURL${NewDiv.id}"> URL with image: </label>
                <input type="url" name="ImageURL" id="ImageURL${NewDiv.id}" >
                
                <label for="Team${NewDiv.id}"> Team: </label>
                <input type="text" name="Team" id="Team${NewDiv.id}" >
                
                <label for="Attitude${NewDiv.id}"> Pronouns: </label>
                <select name="Attitude" id="Attitude${NewDiv.id}" >
                    <option value="Random">Random</option>
                    <option value="Placeholder">Placeholder</option>
                    <option value="Placeholder">Placeholder</option>
                    <option value="Placeholder">Placeholder</option>
                    <option value="Placeholder">Placeholder</option>
                </select>
            </form>`

        ContestantDiv.appendChild(NewDiv)
    }
    PopLastContestantField(){
        const ContestantDiv = document.getElementById("SelectionOfIndividualContestants")
        ContestantDiv.removeChild(ContestantDiv.lastChild)
    }

    ChangeNumberOfContestantsToEqualTheSelectedValue(){
        let HowManyContestants = document.getElementById("HowManyContestants").value
        let currentNumberOfNodes = document.getElementById("SelectionOfIndividualContestants").childNodes.length
        let change = HowManyContestants - currentNumberOfNodes + 1
        if (change > 0){
            for(let i = 0; i < change; i++){
                this.PushNewContestantField()
            }
        }
        else if (change < 0){
            for(let i = 0; i > change; i--){
                this.PopLastContestantField()
            }
        }
    }
}

let reaping = new Reaping()