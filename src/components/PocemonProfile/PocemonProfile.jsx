import React , { useEffect }  from 'react'
import s from './PocemonProfile.module.css'
import Like from '../Like/Like'
import { useLocation } from 'react-router-dom'
import { changePath, loadFavorite } from '../../redux/homeReducer'
import { useSelector, useDispatch  } from 'react-redux'

const PocemonProfile = () => {
    const location = useLocation();
    const currentPokemon = location.state.pokemon;
    const favorites = useSelector(state => state.homeReducer.favorite);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(changePath('/Ralabs-test-task/pokemonProfile'));
    },[])

    const handleAddButton = () => {
        if(localStorage.getItem('favorite')){
            let changedFavorites = [];
            if(favorites.some(item => item.name === currentPokemon.name)){
                changedFavorites = favorites.filter((item) => item.name !== currentPokemon.name )
                localStorage.setItem('favorite', JSON.stringify(changedFavorites));
                dispatch(loadFavorite(changedFavorites));
            }           
            else{
                changedFavorites = [...favorites, currentPokemon];
                dispatch(loadFavorite(changedFavorites));
                localStorage.setItem('favorite', JSON.stringify(changedFavorites));
            }
        }
        else{
            dispatch(loadFavorite([currentPokemon]))
            localStorage.setItem('favorite', JSON.stringify([currentPokemon]))
        }
    } 

    return(
        <div>
            <div className = {s.pocemonOutfit}>
                <div className = {s.pocemonImg}>
                    <img src={`https://pokeres.bastionbot.org/images/pokemon/${currentPokemon.id}.png`}  alt={`${currentPokemon.name}`}/>
                </div>
                <h1 className={s.pocemonName}>
                    {`${currentPokemon.name}`}
                </h1>
            </div>
            <main className={`${s.main}`}>
                <p className = {s.pocemonProperty}>
                    <span className = {s.propertyName}> Base Experience </span> 
                    <span className = {s.propertyValue}> {`${currentPokemon.base_experience} XP`} </span>
                </p>

                <p className = {s.pocemonProperty}>
                    <span className = {s.propertyName}> Height </span> 
                    <span className = {s.propertyValue}> {`${currentPokemon.height} m`} </span>
                </p>

                <p className = {s.pocemonProperty}>
                    <span className = {s.propertyName}> Weight </span> 
                    <span className = {s.propertyValue}> {`${currentPokemon.weight} kg`} </span>
                </p>

                <p className = {s.pocemonProperty}>
                    <span className = {s.propertyName}> Types </span> 
                    <span className = {s.propertyValue}> {`${currentPokemon.types[0].type.name}`} </span>
                </p>

                <p className = {s.pocemonProperty}>
                    <span className = {s.propertyName}> Abilities </span> 
                    <span className = {s.propertyValue}> {`${location.state.pokemon.abilities[0].ability.name}`} </span>
                </p>
            </main>
            
            <button onClick={handleAddButton}  className = { `${s.button} ${(favorites.some(item => item.name === currentPokemon.name) ? s.buttonRemove : s.buttonAdd)}` }>
                    {
                     favorites.some(item => item.name === currentPokemon.name) ? null : <span className={s.like}> <Like fill="none" stroke="#FFFFFF" width="20px" height="20px"/> </span>
                    }
                <span className={s.buttonText}>{
                    favorites.some(item => item.name === currentPokemon.name) ? 'Remove from Favorites' : 'Add to Favorites'
                }</span>
            </button>
        </div>
    )
}

export default PocemonProfile