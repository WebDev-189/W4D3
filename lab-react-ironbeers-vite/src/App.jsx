import { Route, Routes } from "react-router-dom"
import "./App.css"
import HomePage from "./pages/HomePage"
import AllBeersPage from "./pages/AllBeersPage"

function App() {
	return (
		<div className="App">
			<h1>LAB | React IronBeers</h1>

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/beers" element={<AllBeersPage />} />
			</Routes>
		</div>
	)
}

export default App
