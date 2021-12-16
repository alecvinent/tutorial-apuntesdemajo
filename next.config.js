const withPWA = require('next-pwa');

/*
module.exports = {
  reactStrictMode: true,
}
*/

// https://blog.usman-s.me/how-to-make-a-nextjs-app-a-pwa-with-offline-support
module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
  },
  reactStrictMode: true,
});
