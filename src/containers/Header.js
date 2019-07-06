import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions'

const Header = () => {
    return (
        <div>
            <ul className="nav nav-tabs bg-primary">
                <li className="nav-item">
                    <a href="#" className="nav-link">Accueil</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Ressources</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Connexion</a>
                </li>
            </ul>
          
        </div>
    );
};

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, actions)(Header);