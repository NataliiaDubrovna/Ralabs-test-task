export const getPocemonsRequest = async (url) => { 
   return fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        return data.results;
    });
}

export const getPocemonRequest = async (url) => {
    return fetch(url)
     .then((response) => {
         return response.json();
     })
     .then((data) => {
         return data;
     });
 }