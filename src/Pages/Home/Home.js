import React, {useEffect} from 'react';
import "./home.scss";
import { connect } from 'react-redux';
import { 
    getUpcommingMovies, 
    getTopRatedMovies,
    getPopularMovies,
    getLatestMovie } from '../../Redux/Actions/MovieActions/movieActions';
import requests from '../../API/requests';
import { Row } from '../../Components/Row/Row';


const Home = (props) => {

    useEffect(() => {
        props.getUpcommingMovies(requests.getUpcomingMovies);
        props.getTopRatedMovies(requests.getTopRatedMovies);
        props.getPopularMovies(requests.getPopularMovies);
        props.getLatestMovie(requests.getLatestMovie);
     }, [])

     let imageURL;
     if (props.random.backdrop_path)
          imageURL = `http://image.tmdb.org/t/p/original` + props.random.backdrop_path;


    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n-1) + "..." :str;
    }  

    return (
        <React.Fragment>
            <header className='banner'
                style={{
                    backgroundSize: "cover",
                    backgroundImage: imageURL ? 
                    `linear-gradient(to right, rgba(10, 10, 10, 0.8)
                    10%,
                    rgba(100, 100, 100, 0.2)),
                    url(${imageURL})` : '' }}
                >
            
                <div className='banner_contents'>
                    {/* title */}
                    <h1 className='banner_title'>
                        {props.random?.title || props.random.original_title}
                    </h1>
                    {/* buttons */}
                    <div className='banner_buttons'>
                        <button className='banner_button'>Play</button>
                        <button className='banner_button'>More</button>
                    </div>
                    {/* description */}
                    <h2 className='banner_description'>
                        {truncate(props.random?.overview, 250)}
                    </h2>
                </div>
            </header>
            {/* Top Rated Movies */}
            <Row title={"Top rated movies"} lists={props.topRated.results} isLarge/>
          
            {/* Top Rated Movies */}
            <Row title={"Top rated movies"} lists={props.popular.results}/>
        </React.Fragment>
        
    );
};

const mapStateToProps = (state) => {
    return { 
        authUser: state.auth.authUser,
        upcomming: state.movie.upcommingMovies,
        topRated: state.movie.topRatedMovies,
        random: state.movie.random,
        popular: state.movie.popularMovies,
        latest: state.movie.latestMovie
    };
}

const mapDispatchToProps = dispatch => {
    return {
        getUpcommingMovies: (url) => dispatch(getUpcommingMovies(url)),
        getTopRatedMovies: (url) => dispatch(getTopRatedMovies(url)),
        getPopularMovies: (url) => dispatch(getPopularMovies(url)),
        getLatestMovie: (url) => dispatch(getLatestMovie(url))
    };
  }
export default connect(mapStateToProps, mapDispatchToProps)(Home);