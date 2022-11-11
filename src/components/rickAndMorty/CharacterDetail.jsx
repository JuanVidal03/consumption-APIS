import React, { useState, useEffect } from 'react';
// import react-router-dom
import { useParams } from 'react-router-dom';
// import all characters
import { getAllCharacters } from '../../services/services';

const CharacterDetail = () => {
    // useParams to obtain character id
    const { id } = useParams();
    const [character, setCharacter] = useState({});

    //funtion to obtain characters
    const obtainCharacters = () => {
        getAllCharacters()
            .then((res) => {
                const data = res.data.results;
                console.log(data);

                data.map((ele) => {

                    if (ele.id == id) {
                        return setCharacter(ele)
                    }

                })
                
            })
            .catch((err) => {
                console.error(err)
            })
    }

    useEffect(() => {
        obtainCharacters();
    }, [id]);

    document.title = `${character.name} | Rick and Morty API`
    return (
        <div className='detail-character-principal-container'>
            <div className='detail-character-second-container'>
                <div className='detail-character-img-comtainer'>
                    <img
                    alt='Character Image'
                    src={character.image}
                    className='d-char-img'
                    />
                </div>
                <div className='detail-character-info-container'>
                    <h2>{character.name}</h2>
                    <h6>Status & Specie: {character.status} - {character.species}</h6>
                    <h6>Gender: {character.gender}</h6>
                </div>
            </div>
        </div>
    );
}

export default CharacterDetail;
