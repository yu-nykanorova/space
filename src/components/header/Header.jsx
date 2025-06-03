import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/img/space-logo.png';
import './Header.scss';

export const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src={ logo } alt="logo" />
      </Link>
      <nav className="menu">
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? "nav-link nav-link-active" : "nav-link"}
        >
          Home</NavLink>
        <NavLink 
          to="/planets" 
          className={({ isActive }) => isActive ? "nav-link nav-link-active" : "nav-link"}
        >
          Planets</NavLink>
        <NavLink 
          to="/calculator" 
          className={({ isActive }) => isActive ? "nav-link nav-link-active" : "nav-link"}
        >
          Calculator</NavLink>
      </nav>
    </header>
  );
};
