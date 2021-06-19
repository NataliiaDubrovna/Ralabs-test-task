export const getPocemonsRequest = async (url) => { //for getting all pokemons
   return fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        return data.results;
    });
}

export const getPocemonRequest = async (url) => { //for getting data about exact pokemon
    return fetch(url)
     .then((response) => {
         return response.json();
     })
     .then((data) => {
         return data;
        //  return data.results; 
     });
 }