// Cloudflare Worker for Basic Authentication
// Deploy this as a Worker and route it to your Pages domain

// CHANGE THESE CREDENTIALS!
const USERNAME = 'parker';  // Change this
const PASSWORD = 'your-secure-password-here';  // Change this to a strong password

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const authHeader = request.headers.get('Authorization')
  
  // If no auth header, request authentication
  if (!authHeader) {
    return new Response('Authentication required', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Meal Planning Site"',
      },
    })
  }
  
  // Verify credentials
  const [scheme, encoded] = authHeader.split(' ')
  
  if (!encoded || scheme !== 'Basic') {
    return new Response('Invalid authentication', { status: 401 })
  }
  
  const decoded = atob(encoded)
  const [user, pass] = decoded.split(':')
  
  if (user === USERNAME && pass === PASSWORD) {
    // Credentials valid - fetch the actual page
    return fetch(request)
  }
  
  // Invalid credentials
  return new Response('Invalid credentials', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Meal Planning Site"',
    },
  })
}
