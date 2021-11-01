import React from 'react'
import loading from '../../img/loading-chemical.gif'

const Loading = () => {
	return (
		<img src={loading} 
			style={{width: '350px', margin: 'auto', display: 'block', 'padding-top': '60px'}}
			alt='Loading'
			/>
	)
}

export default Loading