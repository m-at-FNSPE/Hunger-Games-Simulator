
class Reaping{
    constructor(){
        this.changeNumberOfContestantsToEqualTheSelectedValue()
        document.getElementById("howManyContestants").addEventListener("change", this.changeNumberOfContestantsToEqualTheSelectedValue.bind(this))
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
}

let reaping = new Reaping()