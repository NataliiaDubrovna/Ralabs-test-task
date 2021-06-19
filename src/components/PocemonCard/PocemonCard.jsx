import React, {useEffect, useState} from 'react';
import s from "./PocemonCard.module.css";
import {getPocemonRequest} from '../../utils/requests';
import Like from '../Like/Like';


const PocemonCard = ({data}) => {

    const [pokemon, setPokemon] = useState(null) 
    const [loading, setLoading] = useState(true)

    const {url} = data // get from priperty of pokemon url property // destructor

    const getPockemonData = async () => {
        const pokemonData = await getPocemonRequest(url)
        setPokemon(pokemonData)
        setLoading(false)
    }

    useEffect(()=> {
        getPockemonData()
    },[])


    return loading ? '...Loading' :
        (<div className = {s.pocemonCard}>

                {/* onclick == > "PocemonPrifile" */}
            
           <div  className = {s.pocemonImg}>
               <img src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}  alt={`${pokemon.name}`}/>
            </div>
           <div className = {s.pocemonInfo}>
                <span className = {s.pocemonName}>
                   {pokemon.name}
                </span>
               <div className = {s.pocemonLike}>
                  <Like fill="none" stroke="#201D2A" width="16px" height="16px"/>
               </div>
           </div>
        </div> )
}


export default PocemonCard