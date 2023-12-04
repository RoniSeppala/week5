const contentDiv = document.getElementById("displaydiv")

async function displayRecipe(food){
    foodres = await fetch("/recipe/" + food);
    foodData = await foodres.json()
    
    const foodTitle = document.createElement("h2")
    foodTitle.innerText = foodData.name
    contentDiv.appendChild(foodTitle)

    const ingredientTitle = document.createElement("h3")
    ingredientTitle.innerText = "Ingredients"
    contentDiv.appendChild(ingredientTitle)

    const ingredientList = document.createElement("ul")
    foodData.ingredients.forEach(element => {
        const ingredientElement = document.createElement("li")
        ingredientElement.innerText = element
        ingredientList.appendChild(ingredientElement);
    });
    contentDiv.appendChild(ingredientList);

    const instructionTitle = document.createElement("h3")
    instructionTitle.innerText = "instructions"
    contentDiv.appendChild(instructionTitle)

    const instructionList = document.createElement("ul")
    foodData.instructions.forEach(element => {
        const instructionElement = document.createElement("li")
        instructionElement.innerText = element
        instructionList.appendChild(instructionElement);
    });
    contentDiv.appendChild(instructionList);

}

displayRecipe("pizza")