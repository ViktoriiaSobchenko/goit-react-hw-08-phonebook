import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={css.navigation}>
      <NavLink
        className={css.link}
        to="/"
        style={({ isActive }) =>
          isActive ? { color: '#b5d0c2' } : { color: '#ffffff' }
        }
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          className={css.link}
          to="/contacts"
          style={({ isActive }) =>
            isActive ? { color: '#b5d0c2' } : { color: '#ffffff' }
          }
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
