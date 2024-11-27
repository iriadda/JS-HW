let wrapper = document.getElementById(`wrapper`);

fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(({recipes}) => {
        console.log(recipes)
        for (const recipe of recipes) {
            let recipeCart = document.createElement(`div`);
            let info = document.createElement(`div`);
            info.innerText = `
            userId: ${recipe.userId}
            id: ${recipe.id}
            mealType: ${recipe.mealType}
            name: ${recipe.name}
            caloriesPerServing: ${recipe.caloriesPerServing}
            cookTimeMinutes: ${recipe.cookTimeMinutes}
            cuisine: ${recipe.cuisine}
            difficulty: ${recipe.difficulty}
            prepTimeMinutes: ${recipe.prepTimeMinutes}
            rating: ${recipe.rating}
            reviewCount: ${recipe.reviewCount}
            servings: ${recipe.servings}
            `
            let img = document.createElement(`img`);
            img.src = recipe.image;

            let ingredients = document.createElement(`p`);
            ingredients.innerText = `ingredients:`;

            let ol = document.createElement("ol");
            for (const element of recipe.ingredients) {
                let li = document.createElement(`li`);
                li.innerText = `${element}`
                ol.append(li)
            }

            let instructions = document.createElement(`p`);
            instructions.innerText = `instructions:`;

            let ul = document.createElement("ol");
            for (const element of recipe.instructions) {
                let li = document.createElement(`li`);
                li.innerText = `${element}`
                ul.append(li);
            }

            recipeCart.append(info, img, ingredients, ol, instructions, ul)
            wrapper.append(recipeCart)

        }
    });