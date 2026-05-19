import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="maincontent-about">
      <div className="content-wrap">
        <h2>Page not found</h2>
        <p className="about-text">
          The page you are looking for does not exist. Use the navigation above
          or return <Link to="/">home</Link>.
        </p>
      </div>
    </div>
  )
}
