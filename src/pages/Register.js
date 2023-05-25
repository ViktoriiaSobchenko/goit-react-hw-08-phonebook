import css from './page.module.css';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import photo from '../images/register.png';

export default function Register() {
  return (
    <div className={css.container}>
      <RegisterForm />
      <img src={photo} alt="" className={css.img} />
    </div>
  );
}
