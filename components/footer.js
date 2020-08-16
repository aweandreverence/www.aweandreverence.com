import css from '../styles/footer.module.scss';

function Footer({ children }) {
    return (
      <footer className={css.footer}>
        &copy; Awe and Reverence 2020
      </footer>
    );
}

export default Footer;
