import classes from './Header.module.css';
import logo from '../assets/logo/logo.png';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header>
      <nav className={classes.container}>
        <section className={classes.side}>
          <div className={classes.top}>
            <Link className={classes.nav} to="about" spy={true} smooth={true}>
              About
            </Link>
            <Link className={classes.nav} to="skills" spy={true} smooth={true}>
              Skills
            </Link>
          </div>
          <div className={classes.bottom} />
        </section>
        <Link className={classes.middle} to="home" spy={true} smooth={true}>
          <img src={logo} alt="logo" className={classes.logo} />
        </Link>
        <section className={classes.side}>
          <div className={classes.top}>
            <Link className={classes.nav} to="project" spy={true} smooth={true}>
              Project
            </Link>
            <Link className={classes.nav} to="contact" spy={true} smooth={true}>
              Contact
            </Link>
          </div>
          <div className={classes.bottom} />
        </section>
      </nav>
    </header>
  );
};

export default Header;
