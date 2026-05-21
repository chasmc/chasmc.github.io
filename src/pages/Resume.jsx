import { assetUrl } from '../utils/assets'

export default function Resume() {
  return (
    <div className="main-content-resume">
      <h3 className="resume-name">Chas McKeown</h3>
      <h4 className="resume-title">Skills</h4>
      <div className="skillscontainer">
        <ul className="skills skills1">
          <li>HTML5</li>
          <li>CSS3</li>
        </ul>
        <ul className="skills skills2">
          <li>SASS</li>
          <li>jQuery</li>
        </ul>
        <ul className="skills skills3">
          <li>Bootstrap</li>
          <li>Git</li>
        </ul>
        <ul className="skills skills4">
          <li>Github</li>
          <li>Illustrator</li>
        </ul>
        <ul className="skills skills5">
          <li>Photoshop</li>
          <li>Wireframing</li>
        </ul>
        <ul className="skills skills6">
          <li>Prototyping</li>
          <li>Invision</li>
        </ul>
      </div>

      <h4 className="resume-title">Work</h4>
      <div className="resume-projects-container">
        <div className="project">
          <h5 className="subtitle">Bike MD</h5>
          <p className="resume-role">Lead front-end developer<br />Assistant designer</p>
          <p className="resume-info">
            A web application designed to foster a community of motorcycle techs in order to assist each other with troubleshooting. As part of a team of three I took the helm of front-end developer and really pushed myself to take the designs to another level that tastefully fit in the context of the application. Working with others that are helpful and respectful makes all the difference and this team was just that. We had a lot of fun with this, and the plan is to work on its future deployment.
          </p>
          <p className="resume-tools">
            Tools used: HTML5, CSS3, SASS, jQuery, Git, Github, Trello
          </p>
        </div>

        <div className="project">
          <h5 className="subtitle">Branchless Bank</h5>
          <p className="resume-role">Logo design, wireframing, mockups, prototyping</p>
          <p className="resume-info">
            A mobile application designed for a hypothetical online only bank.
          </p>
          <p className="resume-tools">
            Tools used: Photoshop, Illustrator, Invision
          </p>
        </div>

        <div className="project">
          <h5 className="subtitle">Goodreads</h5>
          <p className="resume-role">Logo design, wireframing, mockups, front-end development</p>
          <p className="resume-info">
            A redesign of the bookshelf page of the Goodreads website. I started from scratch with the logo and completely redesigned it. From there I gave the page more space by organizing its content and put the focus on the book cover art.
          </p>
          <p className="resume-tools">
            Tools used: HTML5, CSS3, SASS, Git, Github, Illustrator, Photoshop
          </p>
        </div>

        <h4 className="resume-title">Education</h4>
        <div className="project">
          <h5 className="subtitle">The Iron Yard</h5>
          <p className="resume-role">UI Development / Design</p>
          <p className="resume-info">
            Graduated from a three month immersive program studying UI development and design. Subjects covered were: HTML5, CSS3, SASS, Git, Github, media queries, Bootstrap, Photoshop, Illustrator, Wireframing, Prototyping and how to think as a developer and designer in general.
          </p>
        </div>

        <div className="project">
          <h5 className="subtitle">Wake Technical College</h5>
          <p className="resume-role">Web Development and Graphic Design</p>
          <p className="resume-info">
            Was enrolled in the web development and graphic design programs for three years.
          </p>
        </div>

        <div className="project">
          <h5 className="subtitle">East Carolina University</h5>
          <p className="resume-role">Communications</p>
          <p className="resume-info">
            Attended East Carolina for three years as a Communications major.
          </p>
        </div>

        <h4 className="resume-title">Employment</h4>
        <div className="project">
          <h5 className="subtitle">Morning Times (2011-2016)</h5>
          <p className="resume-role">Customer Service / Barista</p>
          <p className="resume-info">
            Was a Barista, food runner, and cashier who was responsible for all moneys handled at the end of the shift. But the heart of the job was playing an active role in the community by treating customers how I would want to be treated and honestly listening to them.
          </p>
        </div>

        <div className="project">
          <h5 className="subtitle">Helios (2008-2011)</h5>
          <p className="resume-role">Customer Service / Barista</p>
          <p className="resume-info">
            Barista, cashier, serving people graciously and friendly. Learned the art of making good coffee. More importantly, I had the privilege of working with a great team and made some great relationships. In turn, I started to feel connected to the local community in downtown Raleigh.
          </p>
        </div>

        <div className="project">
          <h5 className="subtitle">Port City Java (2004-2006)</h5>
          <p className="resume-role">Customer Service / Barista</p>
          <p className="resume-info">
            Barista, cashier, responsible for all moneys at the end of the day.
          </p>
        </div>

        <div className="project">
          <h5 className="subtitle">YMCA (1999-2004)</h5>
          <p className="resume-role">Program Director / Counselor</p>
          <p className="resume-info">
            Was a youth activities program director for a summer, and a full time counselor for the year round program. Responsibilities included programming the entire week of activities for the summer camp, including running the morning assemblies and all structured activities throughout the day. As a full time counselor, I built relationships with the campers and took responsibility for their well being while at the camp.
          </p>
        </div>
      </div>

      <div className="toolscontainer">
        <a className="bikemd-challenges-button" href={assetUrl('chas-resume-2026.pdf')} target="_blank" rel="noreferrer">
          <h4>Open PDF Resume</h4>
        </a>
      </div>
    </div>
  )
}
