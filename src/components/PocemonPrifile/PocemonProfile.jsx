import React from 'react'
import s from './PocemonProfile.module.css'
import Like from '../Like/Like'


const PocemonProfile = () => {
    return(
        <div>
            <div className = {s.pocemonOutfit}>
                <div className = {s.pocemonImg}>
                    <img src="/img/pocemons/Bulbasaur.png" alt="Bulbasaur" />
                </div>
                <h1 className={s.pocemonName}>
                    Bulbasaur
                </h1>
            </div>
            <main>
                <p className = {s.pocemonProperty}>
                    <span className = {s.propertyName}> Base Experience </span> 
                    <span className = {s.propertyValue}> 64 XP </span>
                </p>

                <p className = {s.pocemonProperty}>
                    <span className = {s.propertyName}> Height </span> 
                    <span className = {s.propertyValue}> 0.7 m </span>
                </p>

                <p className = {s.pocemonProperty}>
                    <span className = {s.propertyName}> Weight </span> 
                    <span className = {s.propertyValue}> 6.9 kg </span>
                </p>

                <p className = {s.pocemonProperty}>
                    <span className = {s.propertyName}> Types </span> 
                    <span className = {s.propertyValue}> Grass, Poison </span>
                </p>

                <p className = {s.pocemonProperty}>
                    <span className = {s.propertyName}> Abilities </span> 
                    <span className = {s.propertyValue}> Overgrow,	Chlorophyll </span>
                </p>

            </main>
            
            <button className = {`${s.buttonAdd} ${s.button}`}>
                {/* <img src="/img/icons/like.svg" alt="like"/>   */}

                <Like fill="none" stroke="#FFFFFF" width="20px" height="20px"/>
                <span>Add to Favorites</span>

            </button>

            {/* <button className = {`${s.buttonRemove} ${s.button}`}>
                <span>Remove from Favorites</span>   
            </button>     */}


        </div>
    )
}

export default PocemonProfile