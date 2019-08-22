/**
 * Nextjs simple config
 */

const withPlugins =require( 'next-compose-plugins');
const sass =require('@zeit/next-sass');
const sourceMaps =require('@zeit/next-source-maps');
const os = require('os');

// Set node path: if windows will use semi colon else use colon
process.env.NODE_PATH = ['./'].join(os.platform()==='win32',';',':'); 

/* DEFINE PLUGINS */
plugins = [
  [sass({cssModules: true})], // sass with scoped css modules
  [sourceMaps] // with source maps
  // Add more plugins here
]

nextConfig = {
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }
    return config
  }
}

module.exports = withPlugins(plugins, nextConfig) // export config
