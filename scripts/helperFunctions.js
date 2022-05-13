function randomArrayElement(array){
    return array[Math.floor(Math.random() * array.length)]
}

function ShuffleArray(array){
    let result = []
    let temp = array
    for(let i = 0; i < array.length; i++){
        let element = randomArrayElement(temp)
        result.push(element)
        temp.splice(temp.findIndex(element),1)
    }
    return result

}