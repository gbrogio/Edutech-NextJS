// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

/** @type {import('next').NextConfig} */
module.exports = {
  i18n: {
    locales: ['default', 'pt-br'],
    defaultLocale: 'default',
    localeDetection: false,
  },
  localePath: path.resolve('./src/services/apis/i18n'),
  trailingSlash: true,
};
