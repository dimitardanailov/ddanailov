/**
 * Resources:
 * - https://davidwalsh.name/detect-iphone
 *
 * File has target to recognize the device
 */

function isIphone() {
  return window.navigator.userAgent.match(/iPhone/i)
}

function isPad() {
  return window.navigator.userAgent.match(/iPad/i)
}

function isAndroid() {
  return window.navigator.userAgent.match(/Android/i)
}

function detectDevice() {
  if (isPad()) {
    return 'tablet'
  }

  if (isIphone() || isAndroid()) {
    return 'mobile'
  }

  return 'desktop'
}

export default detectDevice
