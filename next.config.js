// eslint-disable-next-line @typescript-eslint/no-var-requires
const i18next = require('./next-i18next.config.js');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['www.alura.com.br'],
  },
  ...i18next,
};

module.exports = nextConfig;
