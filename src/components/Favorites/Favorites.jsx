import React, {useEffect} from 'react'
import s from './Favorite.module.css'
import PocemonCard from '../PocemonCard/PocemonCard'
import { changePath } from '../../redux/homeReducer'
import { useDispatch,  useSelector  } from 'react-redux'

const Favorites = () => {
    const favorites = useSelector(state => state.homeReducer.favorite);
    const dispatch = useDispatch();
    const pokemons = useSelector(state => state.homeReducer.pokemons);
    const filteredFavorites = pokemons.filter((item) => favorites.some((favorite) => favorite.name === item.name)) 

    useEffect(()=>{
        dispatch(changePath('/favorites'));
    },[])

    return (
        <main className = {s.main}>
            <h1>Favorites</h1>
            {favorites.length ? filteredFavorites.map( (pokemon, index) => <PocemonCard data={pokemon} key={index}/>) : <p> no pocemons </p>}
        </main>
    )
}

export default Favorites