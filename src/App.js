import React from 'react'
import Header from './components/ui/Header'
import CharacterGrid from './components/characters/CharacterGrid'
import Navigate from './components/characters/Navigate'
import CharacterDetails from './components/characters/CharacterDetails'
import EpisodeDetails from './components/Episodes/EpisodeDetails'
import breakingbad from './img/breaking-bad2.jpg'

import './App.css';
import Episodes from './components/Episodes/EpisodesList'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

const App = () => {


  return  (
    <Router>
    <div className='container'>
        <Header />
        <Navigate />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/episodes" component={Episodes} />
          <Route exact path="/episodeDetails/:id" component={EpisodeDetails} />
          <Route exact path="/characters" component={CharacterGrid} />
          <Route exact path="/characterDetails/:id, :name" component={CharacterDetails} />
        </Switch>
      </div>
    </Router>
      )
  
}


const Home = () => (
  <div class="homeImg">
      <img src={breakingbad} 
      style={{width: '80%', height: '350px', margin: 'auto', display: 'block', 'border-style': 'groove',
    'border-radius': '8px'}} 
      alt=''/>
  </div>

  );
//isLoading={isLoading} items={items}
export default App;
