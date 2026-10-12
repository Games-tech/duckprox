// Any scripts that need to be preloaded in advance, like ads or analytics

// UV Service Worker

if (/debug/.test(window.location)) {
  console.log('Debug mode enabled')
  var eruda = document.createElement('script')
  eruda.src = 'https://cdn.jsdelivr.net/npm/eruda'
  document.head.append(eruda)

  eruda.onload = () => {
    eruda.init()
  }
}



const swAllowedHostnames = ['localhost', '127.0.0.1']

async function registerSW() {
  console.log('Starting UV service worker registration...')

  if (
    location.protocol !== 'https:' &&
    !swAllowedHostnames.includes(location.hostname)
  ) {
    throw new Error('Service workers require HTTPS.')
  }

  if (!('serviceWorker' in navigator)) {
    throw new Error('Your browser does not support service workers.')
  }

  try {
    // Use an absolute path so registration doesn't depend
    // on the current page's URL.
    await navigator.serviceWorker.register('/sw.js', {
      scope: __uv$config.prefix
    })

    await navigator.serviceWorker.ready

    console.log('UV service worker is ready!')
  } catch (error) {
    console.error('UV service worker registration failed:', error)
    throw error
  }
}

registerSW().catch(console.error)


// Font Awesome
const fa = document.createElement('link')
fa.href = 'https://cdn.jsdelivr.net/gh/hung1001/font-awesome-pro@4cac1a6/css/all.css'
fa.rel = 'stylesheet'
fa.type = 'text/css'
document.head.appendChild(fa)

// CSS Scripts

const hover = document.createElement('link')
hover.href = 'https://cdn.jsdelivr.net/gh/ianlunn/hover/css/hover-min.css'
hover.rel = 'stylesheet'
document.head.appendChild(hover)

// Google Analytics
var googleAnalytics = document.createElement('script')
googleAnalytics.src = 'https://www.googletagmanager.com/gtag/js?id=G-66ZE075DLD'
googleAnalytics.async = true
document.head.appendChild(googleAnalytics)

window.dataLayer = window.dataLayer || []
function gtag() {
  dataLayer.push(arguments)
}
gtag('js', new Date())

gtag('config', 'G-66ZE075DLD')
