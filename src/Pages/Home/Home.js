import React, {useEffect} from 'react';
import "./home.scss";
import { connect } from 'react-redux';
import { 
    getUpcommingMovies, 
    getTopRatedMovies,
    getPopularMovies,
    getLatestMovie,
    getNetflisOriginals } from '../../Redux/Actions/MovieActions/movieActions';
import requests from '../../API/requests';
import { Row } from '../../Components/Row/Row';
import Banner from '../../Components/Banner/Banner';

const Home = (props) => {


    useEffect(() => {
        const actions = async() => {
            try {
                await props.getUpcommingMovies(requests.getUpcomingMovies);
                await props.getNetflisOriginals(requests.getNetflixOriginals);
                await props.getTopRatedMovies(requests.getTopRatedMovies);
                await props.getPopularMovies(requests.getPopularMovies);
                await props.getLatestMovie(requests.getLatestMovie);
            } catch (error) {
                console.log(error)
            }
        }
        
        actions();
     }, [])


    return (
        <React.Fragment>
          
            <Banner data={props.random}/>
            
             {/* Top Rated Movies */}
            <Row title={"Netflix originals"} lists={props.netflixOriginals.results} isLarge/>
            
             {/* Top Rated Movies */}
            <Row title={"Top rated movies"} lists={props.topRated.results} isLarge/>
          
            {/* Popular Movies */}
            <Row title={"Popular movies"} lists={props.popular.results}/>
        </React.Fragment>
        
    );
};

const mapStateToProps = (state) => {
    return { 
        authUser: state.auth.authUser,
        netflixOriginals: state.movie.netflixOriginals,
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
        getNetflisOriginals: (url) => dispatch(getNetflisOriginals(url)),
        getTopRatedMovies: (url) => dispatch(getTopRatedMovies(url)),
        getPopularMovies: (url) => dispatch(getPopularMovies(url)),
        getLatestMovie: (url) => dispatch(getLatestMovie(url))
    };
  }
export default connect(mapStateToProps, mapDispatchToProps)(Home);
