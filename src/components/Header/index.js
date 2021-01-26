import React, { Component } from 'react';
import "./Header.css";
import logo from '../../assets/lugares.png';

class Header extends Component {
    render() { 
        return ( 
        <header className='header'>
            <img className='logo' src={ logo } alt='Logo Lugares' />
        </header>
        );
    }
}
 
export default Header;