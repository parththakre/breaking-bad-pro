import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './CharacterDetails.css'
import Loading from '../ui/Loading'

const CharacterDetails = ({match}) => {
	//console.log(match);

	const [ items, setItems] = useState([])
	const [ quotes, setQuotes] = useState([])
	const [ isLoading, setIsLoading] = useState(true)


      const fetchItems = async () => {
        
        var randomQuotes = [];
        var quotes = [];
        var getQuotes = {};
        
        const charDets = `https://www.breakingbadapi.com/api/characters/${match.params.id}`;
        const charQuotes = `https://www.breakingbadapi.com/api/quote/random?author=${match.params.name.replace(/\s/g, '+')}`;	
        const getDets = axios.get(charDets)
        
        //console.log(getDets)
        
        for(var i=0;i<5;i++){
        	getQuotes = axios.get(charQuotes);
        	randomQuotes.push(getQuotes);
        } 
      
        axios.all([getDets,randomQuotes[0],randomQuotes[1], randomQuotes[2],randomQuotes[3],randomQuotes[4] ]).then(
        	axios.spread((...allData) => {
        //		console.log(allData)
        		const details = allData[0].data
        		
        		//quotes.push(allData[1].data[0].quote)
        		
        		for(var i=1;i<6;i++){
        			if(allData[i].data[0])
        				quotes.push(allData[i].data[0].quote)
        		}
        	

        	//	console.log(quotes)

        		setItems(details)
        		setQuotes(quotes)
        	//	console.log(quotes)
        		setIsLoading(false)
        	}))

      }
      useEffect(() => {
      	fetchItems()
      }, [])

	return isLoading ? (<Loading />) :(
			<div>
				{items.map((item) => (
					<div class="Detscontainer">
						<div class="image">
							<img src={item.img} alt='' width="300" height="300"/>
						</div>
						<div class="text">
							<li>
								<h1>{item.name}</h1>
							</li>
							<li>
									<strong style={{color:'bisque', 'font-family':'serif'}}>Appeared in seasons :</strong> {item.appearance.map(season => <i>{season}  </i>)}
							</li>
							<li>
									 <strong style={{color:'bisque', 'font-family':'serif'}}>Status :</strong> <small><i>{item.status}</i></small>
							</li>
							<li>
									 <strong style={{color:'bisque', 'font-family':'serif'}}>Quotes :</strong> <i>{quotes.length > 0 ? (quotes.map((quote,index) => <small><p key={index}><q>{quote}</q></p></small>)) : (<small><p><i>** No quotes available **</i></p></small>)}</i>
							</li>
						</div>
					</div>
					))}
			</div>
	)
}

export default CharacterDetails