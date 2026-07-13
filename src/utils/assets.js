import aaThumbnail from '../assets/images/aa-thumbnail.png'
import affinityThumbnail from '../assets/images/affinity-thumbnail.png'
import aboutHeadshot from '../assets/images/chas_headshot.jpg'
import ecopoolThumbnail from '../assets/images/ecopool-thumbnail.png'
import freedomLawnsThumbnail from '../assets/images/freedomlawns-thumbnail.png'
import portfolioLogo from '../assets/images/port-logo-threesquares-2026.png'
import premierThumbnail from '../assets/images/premier-thumbnail.png'
import resumePdf from '../assets/images/cmckeown-resume-2026-dev.pdf'
import square1 from '../assets/images/square1.png'
import square2 from '../assets/images/square2.png'
import square3 from '../assets/images/square3.png'
import terminixThumbnail from '../assets/images/terminix-thumbnail.png'
import triangleThumbnail from '../assets/images/triangle-thumbnail.png'

const assets = {
  'aa-thumbnail.png': aaThumbnail,
  'affinity-thumbnail.png': affinityThumbnail,
  'chas_headshot.jpg': aboutHeadshot,
  'ecopool-thumbnail.png': ecopoolThumbnail,
  'freedomlawns-thumbnail.png': freedomLawnsThumbnail,
  'port-logo-threesquares-2026.png': portfolioLogo,
  'premier-thumbnail.png': premierThumbnail,
  'cmckeown-resume-2026-dev.pdf': resumePdf,
  'square1.png': square1,
  'square2.png': square2,
  'square3.png': square3,
  'terminix-thumbnail.png': terminixThumbnail,
  'triangle-thumbnail.png': triangleThumbnail,
}

export function assetUrl(path) {
  const normalizedPath = path.replace(/^\/?images\//, '')
  const asset = assets[normalizedPath]

  if (!asset) {
    throw new Error(`Missing asset: ${path}`)
  }

  return asset
}
