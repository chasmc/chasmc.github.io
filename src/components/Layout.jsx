import { NavLink, Outlet } from 'react-router-dom'
import { assetUrl } from '../utils/assets'

const navLinkClass = (base) => ({ isActive }) =>
  `${base}${isActive ? ' active' : ''}`

export default function Layout() {
  return (
    <>
      <header className="headertemplate">
        <ul className="navtemplate">
          <a href="/">
            <img
              className="logotemplate"
              src={assetUrl('port-logo-threesquares-2026.png')}
              alt="Chas McKeown logo"
            />
          </a>
          <div className="mainnav">
            <li className="nav1">
              <NavLink className={navLinkClass('about-link')} to="/about">
                about
              </NavLink>
            </li>
            <li className="nav2">
              <NavLink className={navLinkClass('work-link')} to="/work">
                work
              </NavLink>
            </li>
            <li className="nav3">
              <a className="resume-link" href={assetUrl('chas-resume.pdf')} target="_blank" rel="noreferrer">
                Resume
              </a>
            </li>
          </div>
        </ul>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="about-footer">
        
        <a className="about-contact contact" href="mailto:chasmc111@gmail.com">
          <i className="fa fa-envelope" aria-hidden="true"></i>
        </a>
      </footer>
    </>
  )
}
