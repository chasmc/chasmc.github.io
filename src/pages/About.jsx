import { assetUrl } from '../utils/assets'

export default function About() {
  return (
    <div className="maincontent-about">
      <div className="image-wrap">
        <img
          className="about-image"
          src={assetUrl('chas_headshot.jpg')}
          alt="Chas McKeown"
        />
      </div>

      <div className="content-wrap">
        <h3 className="abouttitle main3-titles">Chas McKeown</h3>
        <p className="about-text">
          I am a creative problem solver who loves coding design and designing
          code. I've been a professional front end web developer for over 8
          years now. I have learned so many invaluable skills during this time
          and am continually being humbled and learning new things to this day.
          <br />
          <br />
          That gets to the heart of why I love web development. There is always
          room to grow. I am also a musician, and one of the reasons I love
          music is that I never feel done. I can always learn, and always grow.
          Development is the same in that way. Once I feel done, I've only just
          begun. I look forward to working with you!
        </p>
      </div>
    </div>
  )
}
