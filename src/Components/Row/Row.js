import React from 'react';
import "./row.scss";

const baseUrl = "http://image.tmdb.org/t/p/original";

export const Row = ({title, lists, isLarge}) => {
    console.log(lists)

    return (
        <div className='row'>
            <h2>{title}</h2>

            <div className='row_posters'>

                {lists?.map(list => (
                    <img
                        key={list.id} 
                        className={`row_poster ${isLarge && 'row_posterLarge'}`}
                        src={`${baseUrl}${isLarge ? list.poster_path : list.backdrop_path}`}
                        alt=""
                    />
                ))}
            </div>
        </div>
    )
}