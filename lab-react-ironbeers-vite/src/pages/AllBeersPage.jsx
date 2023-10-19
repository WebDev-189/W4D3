import { useState, useEffect } from "react"
import axios from "axios"

function AllBeersPage() {
	const [beers, setBeers] = useState(null)
	const [query, setQuery] = useState("")
	const [timeoutId, setTimeoutId] = useState(null)

	/**
	 * When an input happen, we want to create a request based on a timeout
	 * We need to save the timeoutid
	 * If there is a new input : cancel current timeout / create a new timeout
	 */

	const fetchAllBeers = async () => {
		try {
			const response = await axios.get(
				`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`
			)
			setBeers(response.data)
		} catch (error) {
			console.log(error)
		}
	}

	const handleChange = (event) => {
		setQuery(event.target.value)
	}

	useEffect(() => {
		if (!timeoutId && !query) {
			fetchAllBeers()
		}
		//console.log(timeoutId)
		if (timeoutId) {
			clearTimeout(timeoutId)
		}

		let id = setTimeout(() => {
			fetchAllBeers()
		}, 200)
		setTimeoutId(id)
	}, [query])

	if (!beers) {
		return <p>Loading...</p>
	}

	return (
		<>
			<input
				type="search"
				value={query}
				onChange={handleChange}
				id=""
				placeholder="Search..."
			/>

			<ul>
				{beers.map((beer) => {
					return <li key={beer._id}>{beer.name}</li>
				})}
			</ul>
		</>
	)
}

export default AllBeersPage
