const faker = require("@faker-js/faker")
const fs = require("fs")

const database = {
	cars: [],
	users: [],
}

for (let i = 1; i < 20; i++) {
	const car = {
		brand: faker.fakerEN.vehicle.manufacturer(),
		name: faker.fakerEN.vehicle.model(),
		colors: [faker.fakerEN.color.human()],
		price: Number(faker.fakerEN.commerce.price({ min: 10000, max: 80000 })),
		id: i,
	}
	database.cars.push(car)
}

for (let i = 0; i < 10; i++) {
	const gender = faker.fakerEN.person.sex()
	const user = {
		gender: gender,
		firstName: faker.fakerEN.person.firstName(gender),
		lastName: faker.fakerEN.person.lastName(gender),
		carId: Math.floor(Math.random() * 19) + 1,
	}
	database.users.push(user)
}

console.log(database)

fs.writeFileSync("./db.json", JSON.stringify(database))
