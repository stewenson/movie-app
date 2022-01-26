import React from 'react';
import './banner.scss';
import StarRating from '../StarRating/StarRating';

const Banner = (data) => {

    //console.log(data.data?.vote_average)

    let imageURL;
    if (data.data.backdrop_path)
         imageURL = `http://image.tmdb.org/t/p/original` + data.data.backdrop_path;


   function truncate(str, n) {
       return str?.length > n ? str.substr(0, n-1) + "..." :str;
   }  
    return (
        <header className='banner'
                style={{
                    backgroundSize: "cover",
                    backgroundImage: imageURL ? 
                    `linear-gradient(to right, rgba(0, 0, 0, 0.6)
                    10%,
                    rgba(100, 100, 100, 0.2)),
                    url(${imageURL})` : '' }}
                >
            
                <div className='banner_contents'>
                    {/* title */}
                    <h1 className='banner_title'>
                        {data.data?.title || data.data.original_title}
                    </h1>
                    
                    <StarRating value={data.data?.vote_average} /> 
                    {/* buttons */}
                    <div className='banner_buttons'>
                        <button className='banner_button'>Play</button>
                        <button className='banner_button'>More</button>
                    </div>
                    {/* description */}
                    <h2 className='banner_description'>
                        {truncate(data.data?.overview, 250)}
                    </h2>
                </div>
        </header>
    )
}
export default Banner;

/*

<Box>
                        <Typography component="legend">{data.data?.vote_average}</Typography>
                        <Rating name="half-rating-read" value={data.data?.vote_average} precision={0.5} max={10} readOnly />
                    </Box>*/