import React, {useEffect, useState} from 'react'
import s from './Main.module.css'
import PocemonCard from '../PocemonCard/PocemonCard'
// import {getPocemonsRequest} from '../../utils/requests'
// import {API} from '../../constants/api' 
import { useSelector } from 'react-redux'

const Main = () => {
    const pokemons = useSelector(state => state.homeReducer.pokemons);
    const [loading, setLoading] = useState(false)

    
    console.log(pokemons);


    return (
        <main className = {s.main}>
            {pokemons.length ? pokemons.map( (pokemon,index) => <PocemonCard data={pokemon} key={index}/>) : null}
        </main>
    )
}



export default Main