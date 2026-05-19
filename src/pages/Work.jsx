import { assetUrl } from '../utils/assets'

export default function Work() {
  return (
    <div className="maincontent-work">
      <a href="https://www.trianglepest.com" target="_blank" rel="noreferrer">
        <div className="workpage-grid work-2">
          <div className="work-info">
            <h2>Triangle Pest</h2>
            <p>Site build for Triangle Pest Control</p>
          </div>
          <div className="image-box">
            <img src={assetUrl('triangle-thumbnail.png')} alt="triangle pest" />
          </div>
        </div>
      </a>

      <a href="https://aawindowgutter.dev.sprowt.us/" target="_blank" rel="noreferrer">
        <div className="workpage-grid work-1">
          <div className="work-info">
            <h2>AA Window + Gutter</h2>
            <p>Site build for AA window and gutter</p>
          </div>
          <div className="image-box">
            <img src={assetUrl('aa-thumbnail.png')} alt="AA" />
          </div>
        </div>
      </a>

      <a href="https://www.premiercaninedetection.com" target="_blank" rel="noreferrer">
        <div className="workpage-grid work-3">
          <div className="work-info">
            <h2>Premiere Canine Detection</h2>
            <p>Site build for Premiere Canine Detection</p>
          </div>
          <div className="image-box">
            <img
              src={assetUrl('premier-thumbnail.png')}
              alt="Premiere Canine Detection"
            />
          </div>
        </div>
      </a>

      <a href="https://terminixnola.com" target="_blank" rel="noreferrer">
        <div className="workpage-grid work-4">
          <div className="work-info">
            <h2>Terminix Pest</h2>
            <p>Site build for Terminix Pest</p>
          </div>
          <div className="image-box">
            <img src={assetUrl('terminix-thumbnail.png')} alt="Terminix" />
          </div>
        </div>
      </a>

      <a href="https://www.fijipool.com/" target="_blank" rel="noreferrer">
        <div className="workpage-grid work-5">
          <div className="work-info">
            <h2>Fiji Pools</h2>
            <p>Site build for Fiji Pools</p>
          </div>
          <div className="image-box">
            <img src={assetUrl('ecopool-thumbnail.png')} alt="Fiji Pools" />
          </div>
        </div>
      </a>

      <a href="https://www.freedomlawnsusa.com/" target="_blank" rel="noreferrer">
        <div className="workpage-grid work-6">
          <div className="work-info">
            <h2>Freedom Lawns</h2>
            <p>Site build for Freedom Lawns</p>
          </div>
          <div className="image-box">
            <img src={assetUrl('freedomlawns-thumbnail.png')} alt="Freedom Lawns" />
          </div>
        </div>
      </a>
    </div>
  )
}
