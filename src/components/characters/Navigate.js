import React from 'react'
import {Link} from 'react-router-dom'
import './Navigate.css'

const Navigate = () => {
	return (
		<div className = "nav">
		<ul>
			<a><Link to="/">Home</Link></a>
			<a><Link to="/episodes">Episodes</Link></a>
			<a><Link to="/characters">Characters</Link></a>
		</ul>
		</div>
	)
}

export default Navigate