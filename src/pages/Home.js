import css from './page.module.css';
import photo from '../images/meditation.png';

export default function Home() {
  return (
    <div className={css.container}>
      <img src={photo} alt="" className={css.img} />
      <div className={css.wrapper}>
        <h1 className={css.title}>Phonebook manager</h1>
        <p className={css.text}>Organize your contacts.</p>
        <p className={css.text}>Easily add, edit, and delete contacts.</p>
        <p className={css.text}>Log in to get started.</p>
      </div>
    </div>
  );
}
