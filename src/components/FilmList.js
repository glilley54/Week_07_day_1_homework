import React from 'react';
import Film from './Film';

const FilmList= ({films}) => {

    const filmNodes = films.map(film => {
        return (
            <ul>
            <li>
            <Film name ={film.name} key={film.id}>{film.url}</Film>
            </li>
            </ul>
        );
    });

    return(
        <>
        {filmNodes}    
      </>    

    )

};


export default FilmList;