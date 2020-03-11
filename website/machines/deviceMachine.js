import {Machine} from 'xstate'

/**
 * Resources:
 * - https://davidwalsh.name/detect-iphone
 */

function isIphone() {
  return navigator.userAgent.match(/iPhone/i)
}

function isPad() {
  return navigator.userAgent.match(/iPad/i)
}

function isAndroid() {
  return navigator.userAgent.match(/Android/i)
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

const deviceMachine = Machine({
  id: 'deviceMachine',
  initial: detectDevice(),
  states: {
    desktop: {
      on: {
        DEVICE_IS_MOBILE: 'mobile',
        DEVICE_IS_TABLET: 'tablet',
      },
    },
    tablet: {
      on: {
        DESKTOP_DEVICE: 'desktop',
        DEVICE_IS_MOBILE: 'mobile',
      },
    },
    mobile: {
      on: {
        DEVICE_IS_DESKTOP: 'desktop',
        DEVICE_IS_TABLET: 'tablet',
      },
    },
  },
})

export default deviceMachine
