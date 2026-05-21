import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { assetUrl } from '../utils/assets'

export default function Home() {
  useEffect(() => {
    const images = document.querySelectorAll('.logo-container a img')

    function handleMouseEnter(event) {
      const current = event.currentTarget
      const container = current.closest('.logo-container')
      const images = container.querySelectorAll('a img')
      images.forEach((img) => {
        if (img !== current) img.style.opacity = '0.5'
      })
    }

    function handleMouseLeave(event) {
      const current = event.currentTarget
      const container = current.closest('.logo-container')
      const images = container.querySelectorAll('a img')
      images.forEach((img) => {
        if (img !== current) img.style.opacity = '1'
      })
    }

    images.forEach((img) => {
      img.addEventListener('mouseenter', handleMouseEnter)
      img.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      images.forEach((img) => {
        img.removeEventListener('mouseenter', handleMouseEnter)
        img.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  return (
    <div className="landing-body">
      <div>
        <nav className="logo-container">
          <Link to="/about">
            <img className="logo square square1" src={assetUrl('square1.png')} alt="About" />
          </Link>
          <Link to="/work">
            <img className="logo square square2" src={assetUrl('square2.png')} alt="Work" />
          </Link>
          <a href={assetUrl('chas-resume-2026.pdf')} target="_blank" rel="noreferrer">
            <img className="logo square square3" src={assetUrl('square3.png')} alt="Resume" />
          </a>
          <div className="name-logo-con">
          <h1 className="logo-name">
            CHAS <div>McKEOWN</div> <div className="light">front-end <div>developer</div></div>
          </h1>
          <footer className="landing-footer">
            <a className="landing-contact contact" href="mailto:chasmc111@gmail.com">
              <i className="fa fa-envelope" aria-hidden="true"></i>
            </a>
          </footer>
          </div>
        </nav>
      </div>
    </div>
  )
}
