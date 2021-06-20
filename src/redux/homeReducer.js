export const LOAD_POKEMONS = "LOAD_POKEMONS";
export const LOAD_FAVORITES = "LOAD_FAVORITES";
export const CHANGE_PATHNAME = "CHANGE_PATHNAME";

const initialState = {
   pokemons: [],
   favorite : [],
   pathName : "/"
} 

export const homeReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD_POKEMONS: {
            return {
                ...state,
                pokemons: action.payload
            };
        }
        case LOAD_FAVORITES: {
            return {
                ...state,
                favorite: action.payload
            };
        }
        case CHANGE_PATHNAME: {
            return {
                ...state,
                pathName: action.payload
            };
        }
       default:
            return state
    }
}

export const loadPokemons = (pokemons) => {
    return {
        type: LOAD_POKEMONS,
        payload: pokemons,
    }
};

export const loadFavorite = (favorite) => {
    return {
        type: LOAD_FAVORITES,
        payload: favorite,
    }
};

export const  changePath = (path) => {
    return {
        type: CHANGE_PATHNAME,
        payload: path,
    }
};


export default homeReducer;