// This file will help with caching assets and enabling offline functionality

// Use the following to register the service worker for PWA functionality
const isLocalhost = Boolean(
    window.location.hostname === 'localhost' ||
      window.location.hostname === '[::1]' ||
      window.location.hostname === '127.0.0.1'
  );
  
  const register = () => {
    if ('serviceWorker' in navigator) {
      // Check if service workers are supported
      window.addEventListener('load', () => {
        const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
  
        if (isLocalhost) {
          // This is localhost, so let's check if the service worker is working properly
          checkValidServiceWorker(swUrl);
        } else {
          registerValidSW(swUrl);
        }
      });
    }
  };
  
  // If the service worker is not valid, show a warning
  const checkValidServiceWorker = (swUrl) => {
    fetch(swUrl)
      .then((response) => {
        if (
          response.status === 404 ||
          response.headers.get('content-type')?.indexOf('javascript') === -1
        ) {
          // Service worker not found, ensure your build step includes a service worker
          navigator.serviceWorker.ready.then(() => {
            alert(
              'No service worker found. This app will not work offline.'
            );
          });
        } else {
          registerValidSW(swUrl);
        }
      })
      .catch(() => {
        console.log('No internet connection. App is running in offline mode.');
      });
  };
  
  const registerValidSW = (swUrl) => {
    navigator.serviceWorker
      .register(swUrl)
      .then((registration) => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch((error) => {
        console.error('Error during service worker registration:', error);
      });
  };
  
  export { register };
  