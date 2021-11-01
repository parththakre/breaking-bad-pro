import React, { useState, useEffect } from 'react'
import './EpisodeDetails.css'
import Loading from '../ui/Loading'

const EpisodeDetails = ({match}) => {

	//console.log(match);

	const [ items, setItems] = useState([])
	const [ isLoading, setIsLoading] = useState(true)

	     
		useEffect(() => {
			const fetchItems = async () => {

      	const getEpisodeDets = await fetch(`https://www.breakingbadapi.com/api/episodes/${match.params.id}`);	
        //console.log(getEpisodeDets)
        const items = await getEpisodeDets.json();
        //console.log(items)
       // const result = await axios(`https://www.breakingbadapi.com/api/episodes/${match.params.id}`)

      //  console.log(result.data)
        setItems(items)
        setIsLoading(false)
      // 
      }
			fetchItems();
		}, [])
	     

	    




	return isLoading ? (<Loading />) : (
		<div>
		<br/>
		{items.map(items => <div class="text">
							
								<li>
								<div style={{'text-align': 'center'}}>
										<h1>{items.title}</h1>
										</div>
								</li>
							
					<div class="float-container">
							<div class="float-child">
								
								<li>
		              				<strong style={{color:'bisque', 'font-family':'serif'}}>Season :</strong> <i><small>{items.season}</small></i>
		           				</li>
		           				 <li>
		             				 <strong style={{color:'bisque', 'font-family':'serif'}}>Episode : </strong> <i><small>{items.episode}</small></i>
		           		 		</li>
		           				<li>
		             				<strong style={{color:'bisque', 'font-family':'serif'}}>Air Date :</strong>  <i><small>{items.air_date}</small></i>
		           		 		</li>
		           			</div>
		           			<div class="float-child">
		           				<li><i>
		             				 <strong style={{color:'bisque', 'font-family':'serif'}}>Characters Appeared :</strong>
		             				 <section className="eplist">				
		             				  	{items.characters.map(character => <small><ul>{character}</ul></small>)}
		             				  </section>

		           		 		</i></li>
		           		 	</div>
		           		</div>
	           	</div>
		)}</div>
		
	)
}

export default EpisodeDetails