// import axios to consume the APIS
import axios from 'axios';


/*========
API RICK AND MORTY
========*/
// getting all characters
export const getAllCharacters = () => {
    return axios.get('https://rickandmortyapi.com/api/character');
}