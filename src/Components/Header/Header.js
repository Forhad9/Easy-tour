import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { userContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <Link className="navbar-brand logo" to="/"><small className="text-danger">EASY TOUR</small></Link>

                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav navbar-position">
                            <Link className="nav-link" aria-current="page" to="/home">Home</Link>
                            <Link className="nav-link" to="/destination">Destination</Link>
                            <Link className="nav-link" to="/">Blog</Link>
                            <Link className="nav-link" to="/">Contact</Link>
                            {
                                loggedInUser.name ?
                                    <b className="nav-link">{loggedInUser.name}</b>
                                    :
                                    <Link className="nav-link btn btn-danger text-white" to="/login">Login</Link>
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
