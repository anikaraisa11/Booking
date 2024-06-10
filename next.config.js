// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// domains: ["demo.webcodecare.com","randomuser.me", "img.freepik.com", "res.cloudinary.com"],

// export default nextConfig;

const nextConfig = {
  images: {
    remotePatterns:[
      {
        protocol:'https',
        hostname:'**'
      }
    ]
  },
};

module.exports =  nextConfig;
