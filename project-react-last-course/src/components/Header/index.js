import React from 'react';
import logo from './../../assets/images/logo.svg';
import { FaCartArrowDown, FaHeart, FaUserAlt } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  // const count = useSelector(state => state.counter.value);
  const favs = useSelector(state => state.fav.value);
  console.log(favs);
  return (
    <header className="page-header">
      <div className="container">
        <NavLink to="/" className="logo"><img src={logo} alt="logo" /></NavLink>
        {process.env.REACT_APP_API}
        <nav className="page-nav">
          <ul>
            <li>
              <NavLink exact activeClassName="active" to="/">Home</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/products">Products</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/about-us">About Us</NavLink>
            </li>
          </ul>
        </nav>
        <ul className="header-account">
          <li><NavLink activeClassName="active" to="/account">
            <span className="wrap-fav-coutner">
              <FaHeart />
              {!!favs.length && <span>{favs.length}</span>}
            </span>
            </NavLink></li>
          <li><NavLink activeClassName="active" to="/account"><FaUserAlt /></NavLink></li>
          <li><NavLink activeClassName="active" to="/"><FaCartArrowDown /></NavLink></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
