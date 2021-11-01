
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CharacterList from './CharacterList'
import Search from '../ui/Search'
import Loading from '../ui/Loading'

const CharacterGrid = () => {

	const [ items, setItems] = useState([])
    const [ isLoading, setIsLoading] = useState(true)
    const [ query, setQuery] = useState('')

    useEffect(() => {
      const fetchItems = async () => {
        const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)

     //   console.log(result.data)
        setItems(result.data)
        setIsLoading(false)
      }

      fetchItems()
      }, [query])



	//console.log(items)


	return isLoading ? (<Loading />) : (
		<div className='container'>
			<Search getQuery={(q) => setQuery(q)} />

			<section className="chlist">
				
				{items.map((item) => (
					<CharacterList key={item.char_id} item={item}></CharacterList>
				))}

			</section>
		</div>
	)
}

export default CharacterGrid