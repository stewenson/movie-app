import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import { 
    getUpcommingMovies, 
    getTopRatedMovies,
    getPopularMovies } from '../../Redux/Actions/MovieActions/movieActions';
import requests from '../../API/requests';


const Home = (props) => {

    useEffect(() => {
        props.getUpcommingMovies(requests.getUpcomingMovies);
        props.getTopRatedMovies(requests.getTopRatedMovies);
        props.getPopularMovies(requests.getPopularMovies)
     }, [])

    return (
        <>
        
        </>
    );
};

const mapStateToProps = (state) => {
    return { 
        authUser: state.auth.authUser,
        upcomming: state.movie.upcommingMovies,
        topRated: state.movie.topRatedMovies,
        popular: state.movie.popularMovies
    };
}

const mapDispatchToProps = dispatch => {
    return {
        getUpcommingMovies: (url) => dispatch(getUpcommingMovies(url)),
        getTopRatedMovies: (url) => dispatch(getTopRatedMovies(url)),
        getPopularMovies: (url) => dispatch(getPopularMovies(url))
    };
  }
export default connect(mapStateToProps, mapDispatchToProps)(Home);