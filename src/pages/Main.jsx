import classes from './Main.module.css';

const Main = () => {
  return (
    <main className={classes.main} id="main">
      <section className={classes.background}>
        <p>FRONTEND</p>
        <p>DEVELOPER</p>
        <p>{'MOO ' + 'SAENG ' + 'PARK'}</p>
      </section>
    </main>
  );
};

export default Main;
