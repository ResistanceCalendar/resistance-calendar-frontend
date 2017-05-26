export const facebookAppId = '274135313007103';

// The code below is a stop-gap while we come up with a more economic
// solution to Cloudinary.
// Set overridedevMode to true if you want to work locally
// but see the live images as they'd appear in production. We are
// using this flag so as to avoid exceeding traffic limitiations
// of Cloudinary, so CHECK WITH DEVIN OR ONE OF THE API DEVS TO
// MAKE SURE WE AREN'T CLOSE TO OUR BANDWIDTH LIMIT.
const overrideDevMode = true;
export const devMode = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') && !overrideDevMode;
