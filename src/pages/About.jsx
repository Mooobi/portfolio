import Profile from '../components/Profile';
import classes from './About.module.css';
import profile from '../assets/images/profile2.jpeg';

const About = () => {
  return (
    <section className={classes.container} id="about">
      <img className={classes.img} src={profile} alt="profile" />
      <Profile />
    </section>
  );
};

export default About;
