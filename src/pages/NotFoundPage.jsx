import React from 'react';
// import react-router-dom
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
    // change the document title
    document.title = '404 | Not Found Page';

    //redirection to home page
    const navigate = useNavigate();
    return (
        <div>
            <div className='not-found__container'>
                <h1 className='not-found__title'>404</h1>
                <h5 className='not-found__text'>The content doesn't exist.</h5>
                <button className='not-found__btn' onClick={() => navigate('/')}>Go to Home</button>
            </div>
        </div>
    );
}

export default NotFoundPage;
