import { NavLink } from 'react-router-dom';
import css from '../Navigation/Navigation.module.css';

export const AuthNav = () => {
  return (
    <div className={css.navigation}>
      <NavLink
        className={css.link}
        to="/register"
        style={({ isActive }) =>
          isActive ? { color: '#a6c8d9' } : { color: '#ffffff' }
        }
      >
        Register
      </NavLink>
      <NavLink
        className={css.link}
        to="/login"
        style={({ isActive }) =>
          isActive ? { color: '#a6c8d9' } : { color: '#ffffff' }
        }
      >
        Log In
      </NavLink>
    </div>
  );
};
