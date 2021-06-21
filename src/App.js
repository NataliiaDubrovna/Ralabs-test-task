import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import PocemonProfile from './components/PocemonProfile/PocemonProfile';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { API } from './constants/api';
import {loadPokemons, loadFavorite} from './redux/homeReducer'
import {getPocemonsRequest} from './utils/requests'
import Favorites from './components/Favorites/Favorites'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";


function App() {

  const dispatch = useDispatch();
  const getPokemonList = async () => {
    const pokemonsList = await getPocemonsRequest(API.pocemonsList);
    dispatch(loadPokemons(pokemonsList))
  }

  useEffect(() => { 
    getPokemonList();
    if(localStorage.getItem('favorite')){
        const favoritePokemon = JSON.parse(localStorage.getItem('favorite'));
        dispatch(loadFavorite(favoritePokemon));
    }
  }, [])

  return (
    <Router>
    <div >
        <Header/>

        <Switch>
        <Route path='/Ralabs-test-task/favorites'>
           <Favorites />
        </Route>
        <Route path="/Ralabs-test-task/pokemonProfile">
              <PocemonProfile/>
        </Route>
        <Route exact path="/Ralabs-test-task/">
              <Main/>
        </Route>
        <Route path='*'> 
          <div>page not found 404</div>
        </Route>
        </Switch>
    </div>
    </Router>
  )
}

export default App;
