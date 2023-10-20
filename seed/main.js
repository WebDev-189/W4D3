const fs = require("fs")

const axios = require("axios")
const parseString = require("xml2js").parseString
const url = "https://boardgamegeek.com/xmlapi/boardgame"
const gameIds = ["224517"]
const parser = require("xml2json")
const games = []
async function fetchGame() {
	try {
		for (const id of gameIds) {
			const response = await axios.get(`${url}/${id}`)
			// console.log(response)
			let result = parser.toJson(response.data)
			result = JSON.parse(result)
			// for (const name of result.boardgames.boardgame.name) {
			// 	console.log(name["$t"])

			// }
			console.log(result)

			const game = {
				id: id,
				name: result.boardgames.boardgame.name[0]["$t"],
				picture: result.boardgames.boardgame.image,
				description: result.boardgames.boardgame.description.replaceAll(
					"<br/>",
					"\n"
				),
				publishYear: result.boardgames.boardgame.yearpublished,
			}
			console.log(game)
			games.push(game)
		}
	} catch (error) {
		console.log(error)
	}
}

fetchGame()
