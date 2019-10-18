import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Logout from "../user/Logout";

export default class Header extends Component {
    render() {
        const greeting = (
            <div id="profile">
                <span id="username">Hello, {this.props.username}!</span>|
                <Link to="/logout" onClick={<Logout userLoggedIn={this.props.userLoggedIn} />}>
                    logout
                </Link>
            </div>
        );

        return (
            <header>
                <Link to="/" className="link">
                    <span className="header">SWAPP</span>
                </Link>
                <Link to="/episodes" className="link">
                    <span>Episodes</span>
                </Link>
                <Link to="/characters" className="link">
                    <span>Characters</span>
                </Link>
                <Link to="/logout" className="link">
                    <span>Logout</span>
                </Link>
                {this.props.username ? greeting : null}
            </header>
        );
    }
}

Header.propTypes = {
    username: PropTypes.string,
    userLoggedIn: PropTypes.func
};