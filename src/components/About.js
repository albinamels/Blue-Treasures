import aboutImg from "../images/about.png";
import Title from "./Title";

const About = () => {
  return (
    <section className="section" id="about">
      <Title title="about" subTitle="us" />

      <div className="section-center about-center">
        <div className="about-img">
          <img src={aboutImg} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
            We’ve found that not many people know about Kyrgyzstan and Central
            Asia or the opportunities it holds for tourism. We at Silk Road
            Explore truly love and are proud of the country we live in. Its
            beauty is beyond compare, our culture and traditions are unique and
            meaningful, and we have an ancient Silk Road heritage.
            Unfortunately, not many people know about Kyrgyzstan’s gorgeous
            setting, nomadic culture, or rich history. This is what we’d like to
            change.
          </p>
          <p>
            Here at Silk Road Explore, we love what we do. We make an effort to
            find and display a variety of tours for people that enjoy a wide
            range of activities so that travelers can choose tours that are
            perfect for them. We genuinely want to see people relax and enjoy
            their time in our country so they can have the best vacation
            possible.
          </p>
          <a href="#" className="btn">
            read more
          </a>
        </article>
      </div>
    </section>
  );
};

export default About;
