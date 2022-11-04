// import axios to consume the APIS
import axios from 'axios';



/*========
API RICK AND MORTY
========*/
export const getAllCharacters = () => {
    return axios.get('https://rickandmortyapi.com/api/character');
}