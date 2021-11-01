import React from 'react'
import {Link} from 'react-router-dom'
import './Navigate.css'

const Navigate = () => {
	return (
		<div className = "nav">
		<ul>
			<button class ="button"><Link to="/">Home</Link></button>
			<button class ="button"><Link to="/episodes">Episodes</Link></button>
			<button class ="button"><Link to="/characters">Characters</Link></button>
		</ul>
		</div>
	)
}

export default Navigate