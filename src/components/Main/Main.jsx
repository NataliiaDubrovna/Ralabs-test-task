import React, {useEffect, useState} from 'react'
import s from './Main.module.css'
import PocemonCard from '../PocemonCard/PocemonCard'
import {getPocemonsRequest} from '../../utils/requests'
import {API} from '../../constants/api' 

const Main = () => {
    const [pokemons, setPokemons] = useState(null) //create variable pokemons , and functions for changes setPokemons
    const [loading, setLoading] = useState(true)

    const getPokemonList = async () => {
        const pokemonsList = await getPocemonsRequest(API.pocemonsList)  //get pocemonList from API
        setPokemons(pokemonsList) // change state of variable pokemons , and now it contain obj of pokemons
        setLoading(false) // when we have data of pokemons preloading stoped
    }

    useEffect(() => { 
        getPokemonList()
    }, [])


    return (
        <main className = {s.main}>
            {loading ? '...Loading': pokemons.map( (pokemon,index) => <PocemonCard data={pokemon} key={index}/>)}
        </main>
    )
}



export default Main