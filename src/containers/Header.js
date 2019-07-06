import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setAuthentification } from '../actions'
import {Link} from 'react-router-dom'

const Header = ({ isLoggedIn, setAuthentification }) => {
    const onAuth = () => {
        setAuthentification(!isLoggedIn)
    }

    const renderAuthLabel = isLoggedIn ? 'DECONNEXION' : 'CONNEXION'


    return (
        <div>
            <ul className="nav nav-tabs bg-primary">
                <li className="nav-item">
                    <Link to="/" className="nav-link">
                        Accueil
                        </Link>
                </li>
                <li className="nav-item">
                    <Link to="/ressources" className="nav-link">
                        Ressources
                        </Link>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link" onClick={onAuth}>
                        {renderAuthLabel}
                    </a>
                </li>
            </ul>

        </div>
    );
};

const mapStateToProps = state => ({
    isLoggedIn: state.auth.isLoggedIn
})

export default connect(mapStateToProps, { setAuthentification })(Header);