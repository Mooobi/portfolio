import classes from './Profile.module.css';

const Profile = () => {
  return (
    <div className={classes.container}>
      <header className={classes.header}>
        한 걸음씩 꾸준히 성장하는 개발자가
        <br />
        되고 싶은 <span>박무생</span>입니다.
      </header>
      <article className={classes.article}>
        <section>
          문제 해결 과정에서 끊임없이 고민하며 결과를 도출하는 것을 좋아하고,
          <br />
          단순히 알기보다는 경험을 통한 학습을 중요하게 생각합니다.
        </section>
        <section>
          서울과학기술대학교 건축공학과 졸업
          <br /> 경남 거제시 건축직 지방공무원 의원면직
          <br />
          코드스테이트 프론트엔드 부트캠프 44기 수료
        </section>
      </article>
    </div>
  );
};

export default Profile;
