import React, { useState, useEffect }  from 'react'
import axios from 'axios'
import Loading from '../ui/Loading'
import {Link} from 'react-router-dom';


const EpisodesList = () => {


	const [ items, setItems] = useState([])
    const [ isLoading, setIsLoading] = useState(true)

    useEffect(() => {
      const fetchItems = async () => {
        const result = await axios(`https://www.breakingbadapi.com/api/episodes`)
        setItems(result.data)
        setIsLoading(false)
      }

      fetchItems()
      }, [])
	
	return isLoading ? (<Loading />) : (
		<div className='container'>
					<br/>
					<br/>
			<section className="chlist">				
				{items.map((item) => (
						<li><Link key={item.episode_id} to={`/episodeDetails/${item.episode_id}`}>{item.title}</Link></li>
					))}
			</section>
		</div>
	)
}

export default EpisodesList