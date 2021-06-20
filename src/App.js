import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import PocemonProfile from './components/PocemonPrifile/PocemonProfile';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { API } from './constants/api';
import {loadPokemons, loadFavorite} from './redux/homeReducer'
import {getPocemonsRequest} from './utils/requests'
import Favorites from './components/Favorites/Favorites'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";



function App() {
  const dispatch = useDispatch();
  const getPokemonList = async () => {
    const pokemonsList = await getPocemonsRequest(API.pocemonsList)  //get pocemonList from API
    dispatch(loadPokemons(pokemonsList))// change state of variable pokemons , and now it contain obj of pokemons
    // setLoading(false) // when we have data of pokemons preloading stoped
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
    <div>
        <Header/>

        <Switch>
        <Route path='/favorites'>
           <Favorites />
        </Route>
        <Route path="/pokemonProfile">
              <PocemonProfile/>
        </Route>
        <Route exact path="/">
        {/* <Route exact path="/namerepos/"> */}
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
