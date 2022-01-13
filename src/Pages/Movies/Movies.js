import React, {useEffect} from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { 
    getUpcommingMovies, 
    getTopRatedMovies,
    getPopularMovies } from '../../Redux/Actions/MovieActions/movieActions';
import requests from '../../API/requests';

const Movies = (props) => {
    //const [movies, setMovies] = useState([])

    useEffect(() => {
       props.getUpcommingMovies(requests.getUpcomingMovies);
       props.getTopRatedMovies(requests.getTopRatedMovies);
       props.getPopularMovies(requests.getPopularMovies)
    }, [])

    // upcomming movies
   console.log(props.upcomming, "upcomming");

    // top rated movies
    console.log(props.topRated, "top rated");

    // top rated movies
    console.log(props.popular.results, "popular");

    if (!props.authUser) {
        return (<Redirect to={{
            pathname: "/",
            state: { from: props.location }
        }} />);
    }
    
    return (
        <div>
            <h1>Dashboard</h1>
            <h2>Name: {props.authUser.displayName}</h2>
            <h2>Email: {props.authUser.email}</h2>
        </div>
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
  
export default connect(mapStateToProps, mapDispatchToProps)(Movies);