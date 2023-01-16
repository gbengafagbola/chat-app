/** @type {import('next').NextConfig} */

const webpack = require('webpack');
require('dotenv').config();



const nextConfig = {
  webpack: config => {
    const env = Object.keys(process.env).reduce((acc, curr) => {
      acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
      return acc;
    }, {});
    
    config.plugins.push(new webpack.DefinePlugin(env));
    return config;
  },

  experimental: {
    appDir: true,
  },
};


module.exports = nextConfig


// const nextConfig = {
//   experimental: {
//     appDir: true,
//   },
// }

// module.exports = nextConfig




  // const webpack = require('webpack');
  // require('dotenv').config();
  
  //   module.exports = {
  //     webpack: config => {
  //       const env = Object.keys(process.env).reduce((acc, curr) => {
  //         acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
  //         return acc;
  //       }, {});
        
  //       config.plugins.push(new webpack.DefinePlugin(env));
        
  //       return config;
  //     }
  //   };