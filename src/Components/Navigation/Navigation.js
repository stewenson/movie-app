import React, {useState} from 'react';
import "./navigation.scss";
import { Link } from 'react-router-dom';
import SignOut from '../SignOutButton/SignOutButton';
import SignOutButton from '../SignOutButton/SignOutButton';
import { connect } from 'react-redux';

const Navigation = (props) => {

    /* 
    Scroll action 
    window.onscroll will listening if page was scrolled or not 
    then set isScrolled
    */
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
  };

    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
        <div className="container">
            <div className="left">
            <Link to="/" className="link">
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                alt=""
            />
            </Link>
            <Link to="/movies" className="link">
                <span>Movies</span>
            </Link>
        
            </div>
            <div className="right">
             
                <span>{props.authUser.displayName ? props.authUser.displayName : " "}</span>
                <SignOutButton />
               
                
            </div>
        </div>
    </div>
        
    );
};

const mapStateToProps = (state) => {
    return {
        authUser: state.auth.authUser
    };
};

export default connect(mapStateToProps)(Navigation);
