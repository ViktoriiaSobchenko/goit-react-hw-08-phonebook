import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={css.container}>
      <h2>Log in</h2>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <label htmlFor="email" className={css.label}>
          Email
        </label>
        <input
          type="email"
          name="email"
          className={css.input}
          placeholder="email@address.com"
        />
        <label htmlFor="password" className={css.label}>
          Password
        </label>
        <input
          type="password"
          name="password"
          className={css.input}
          placeholder="Enter your password"
        />
        <button type="submit" className={css.btn}>
          Log In
        </button>
      </form>
    </div>
  );
};
