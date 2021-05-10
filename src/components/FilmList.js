import React from 'react';
import Film from './Film';

const FilmList= ({films}) => {

    const filmNodes = films.map(film => {
        return (
            <ol>
            <Film name ={film.name} key={film.id}>{film.url}</Film>
            </ol>
        );
    });

    return(
        <>
        {filmNodes}    
      </>    

    )

};


export default FilmList;