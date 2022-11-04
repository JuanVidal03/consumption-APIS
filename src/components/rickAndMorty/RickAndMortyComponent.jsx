import React, { useEffect, useState } from 'react';
// import axios rick and morty
import { getAllCharacters } from '../../services/services';
// import react-roter-dom
import { useNavigate } from 'react-router-dom';

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

    return (
        <div>
            <div className='title__container-RAM'>
                <h1 className='title__RAM'>The Rick and Morty API</h1>
                <p>https://rickandmortyapi.com/</p>
            </div>
            <div className='characters__principal-container-RAM'>
            {
                character.map((character, index) => {
                    return(
                        <div key={index} className='characters__container-RAM'>
                            <div className='img__container-RAM'>
                                <img src={character.image} className='img_RAM'/>
                            </div>
                            <div className='characters__info-RAM'>
                                <h6 className='name_RAM'>{character.name}</h6>
                                <div className='alive-RAM-container'>
                                    {(() => {
                                        if (character.status === 'Alive') {
                                            return(
                                                <div className='alive-RAM'></div>
                                            )
                                        } else if (character.status === 'Dead') {
                                            return(
                                                <div className='dead-RAM'></div>
                                            )
                                        } else if(character.status === 'unknown') {
                                            return(
                                                <div className='unknown-RAM'></div>
                                            )
                                        }
                                        })()
                                    }
                                    <p className='specie-RAM'>{character.status} - {character.species}</p>
                                </div> <br/>
                                <div>
                                    <p className='origin-RAM'>Planet Origin:</p>
                                    <p className='origin-name-RAM'>{character.origin.name}</p>
                                </div> <br/>
                                <div>
                                    <p className='origin-RAM'>Fisrt seen in:</p>
                                    <p className='origin-name-RAM'>{character.episode[0]}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    );
}

export default RickAndMortyComponent;
