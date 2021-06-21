import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import s from "./PocemonCard.module.css";
import {getPocemonRequest} from '../../utils/requests';
import Like from '../Like/Like';
import { useDispatch, useSelector } from 'react-redux';
import { changePath } from '../../redux/homeReducer'
    

const PocemonCard = ({data}) => {

    const [pokemon, setPokemon] = useState(null); 
    const [loading, setLoading] = useState(true);

    const history = useHistory();
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.homeReducer.favorite);
    const {url} = data;
    
    const getPockemonData = async () => {
        const pokemonData = await getPocemonRequest(url)
        setPokemon(pokemonData)
        setLoading(false)
    }
    const heandleCardClick = () =>{
        dispatch(changePath('/Ralabs-test-task/pokemonProfile'));
        history.push({pathname:'/Ralabs-test-task/pokemonProfile',state: {pokemon:pokemon}})
    }

    useEffect(()=> {
        getPockemonData()
    },[])



    return loading ? '...Loading' :
        (<div  onClick={heandleCardClick} className = {s.pocemonCard}>
           <div  className = {s.pocemonImg}>
               <img src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}  alt={`${pokemon.name}`}/>
            </div>
           <div className = {s.pocemonInfo}>
                <span className = {s.pocemonName}>
                   {pokemon.name}
                </span>
               <div className = {s.pocemonLike}>
                  <Like fill={
                      favorites.some(item => item.name === pokemon.name) ? '#201D2A' : 'none'
                  } stroke="#201D2A" width="16px" height="16px"/>
               </div>
           </div>
        </div> )
}

export default PocemonCard