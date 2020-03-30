import Rellax from "rellax"

export function applyParallax(el, options) {
  if (window.innerWidth > 700) {
    // eslint-disable-next-line no-new
    new Rellax(el, options)
  }
}
