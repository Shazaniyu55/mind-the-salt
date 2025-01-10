const { prototype } = require("events")

module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'lh3.googleusercontent.com'
        },
        {
          protocol:"https",
          hostname:"firebasestorage.googleapis.com"
        },
        {
          protocol:"https",
          hostname:"*"
        },
        // {
        //   protocol: 'https',
        //   hostname: 's.gravatar.com'
        // },
        // {
        //   protocol: 'https',
        //   hostname: 'i1.wp.com'
        // }
      ],
    },
  }