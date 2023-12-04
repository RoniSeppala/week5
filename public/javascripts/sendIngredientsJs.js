const recipeName = document.getElementById("name-text")
const ingredientText = document.getElementById("ingredients-text")
const addIngredientsButton = document.getElementById("add-ingredient")
const instructionText = document.getElementById("instructions-text")
const addInstructionButton = document.getElementById("add-instruction")
const submitButton = document.getElementById("submit")

let = returnJSON = {
    "name": "",
    "instructions": [],
    "ingredients": []
}
console.log(returnJSON)

addIngredientsButton.addEventListener('click', () => {
    returnJSON.ingredients.push(ingredientText.value)
    console.log(returnJSON)
})

addInstructionButton.addEventListener('click', () => {
    returnJSON.instructions.push(instructionText.value)
    console.log(returnJSON)
})

submitButton.addEventListener('click', () => {
    returnJSON.name = recipeName.value
    console.log(returnJSON)
    fetch('http://localhost:3000/recipe/', {
        method: "post",
        headers: {
            "Content-type": "application/json"
        },
        body:JSON.stringify(returnJSON)
    }).then(response => response.json()).then(data => {
        console.log(data)

        returnJSON.name = ""
        returnJSON.instructions = []
        returnJSON.ingredients = []
        console.log(returnJSON)
    })
})