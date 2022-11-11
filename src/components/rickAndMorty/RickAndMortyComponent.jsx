import React, { useEffect, useState } from 'react';
// import axios rick and morty
import { getAllCharacters } from '../../services/services';
import Character from './Character';
// import NavBar
import NavBarRickAndMorty from './NavBarRickAndMorty';


const RickAndMortyComponent = () => {

    // useState to render all characters
    const [character, setCharacter] = useState([]);


    // function to obtain characters data
    const obtainCharacters = () => {
        getAllCharacters()
            .then((res) => {
                setCharacter(res.data.results)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    // useEffect to load the res before to render
    useEffect(() => {
        obtainCharacters();
    }, []);

    //change document.title
    document.title = 'Rick and Morty API'

    return (
        <div>
            <NavBarRickAndMorty/>
            <div className='title__container-RAM'>
                <h1 className='title__RAM'>The Rick and Morty API</h1>
                <a
                href='https://rickandmortyapi.com/'
                target='_blank'
                rel='noreferrer'
                className='oficial-site'>Check the Oficial Website</a>
            </div>
            <div className='characters-bg-color'>
                <div className='characters__principal-container-RAM'>
                {
                    character.map((character, index) => {
                        return(
                            <Character cha={character} key={index}/>
                        )
                    })
                }
                </div>
            </div>
        </div>
    );
}

export default RickAndMortyComponent;