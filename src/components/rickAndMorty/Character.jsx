import React from 'react';
// import react-router-dom
import { Link } from 'react-router-dom';

const Character = ({ cha }) => {
    return (
        <Link to={`/character/${cha.id}`}>
            <div>
                <div className='characters__container-RAM'>
                    <div className='img__container-RAM'>
                        <img
                        alt='character img'
                        src={cha.image}
                        className='img_RAM'/>
                    </div>
                    <div className='characters__info-RAM'>
                        <h6 className='name_RAM'>{cha.name}</h6>
                        <div className='alive-RAM-container'>
                            {(() => {
                                if (cha.status === 'Alive') {
                                    return(
                                        <div className='alive-RAM'></div>
                                        )
                                } else if (cha.status === 'Dead') {
                                    return(
                                        <div className='dead-RAM'></div>
                                        )
                                    } else if(cha.status === 'unknown') {
                                        return(
                                            <div className='unknown-RAM'></div>
                                            )
                                        }
                                    })()
                                }
                            <p
                            className='specie-RAM'
                            >{cha.status} - {cha.species}</p>
                        </div> <br/>
                        <div>
                            <p className='origin-RAM'>Planet Origin:</p>
                            <p className='origin-name-RAM'>{cha.origin.name}</p>
                        </div> <br/>
                        <div>
                            <p className='origin-RAM'>Fisrt seen in:</p>
                            <p className='origin-name-RAM'>{cha.episode[0]}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default Character;
