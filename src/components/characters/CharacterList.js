import React from 'react'
import {Link} from 'react-router-dom';
import './CharacterList.css'

const CharacterList = ({item}) => {

	return (
		<div className='charList'>
			 <li><Link key={item.char_id} to={`/characterDetails/${item.char_id}, ${item.name}`}>{item.name}</Link></li>
		</div>
	)
}

export default CharacterList