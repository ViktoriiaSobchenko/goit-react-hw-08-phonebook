import css from './page.module.css';
import { LoginForm } from 'components/LoginForm/LoginForm';
import photo from '../images/phone.png';

export default function Login() {
  return (
    <div className={css.container}>
      <LoginForm />
      <img src={photo} alt="" className={css.img} />
    </div>
  );
}
