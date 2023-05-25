import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={css.container}>
      <h2>Registration</h2>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <label htmlFor="name" className={css.label}>
          Username
        </label>
        <input
          type="text"
          name="name"
          className={css.input}
          placeholder="Ex. Jacob Mercer"
        />
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
          Register
        </button>
      </form>
    </div>
  );
};
