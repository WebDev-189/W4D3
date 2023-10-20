const axios = require("axios")
const alphabet = ["a", "b", "c"]
const fs = require("fs")

const meals = []
async function seed() {
	for (const letter of alphabet) {
		const response = await axios.get(
			`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`
		)

		const originalMeals = response.data.meals

		for (const oneMeal of originalMeals) {
			const meal = {
				name: oneMeal.strMeal,
			}
			meal.ingredients = [
				{ ingredient: oneMeal.strIngredient1, quantity: oneMeal.strMeasure1 },
				{ ingredient: oneMeal.strIngredient2, quantity: oneMeal.strMeasure2 },
			]

			meals.push(meal)
		}
	}
	fs.writeFileSync("db.json", JSON.stringify({ meals: meals }))
}

seed()
