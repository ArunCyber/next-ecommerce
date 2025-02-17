import type { NextConfig } from "next";
// const webpack = require("webpack");

const nextConfig: NextConfig = {
  /* config options here */
  // webpack: (config) => {
  //   config.resolve.alias = {
  //     ...config.resolve.alias,
  //     react: require.resolve("react"),
  //     "react-dom": require.resolve("react-dom"),
  //   };
  //   return config;
  // },
  images: {
    domains: ['storage.googleapis.com'], // Add your allowed domains here
  },
};

export default nextConfig;
