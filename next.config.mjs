// **************************
// Standard config
// **************************
// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// import nextra from 'nextra';

// const withNextra = nextra({
//   theme: 'nextra-theme-docs',
//   themeConfig: './theme.config.jsx',
//   standalone: true,
// });

// export default withNextra(nextConfig);

// **************************
// Config with alias support
// **************************
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias['@hyperui'] = require('path').resolve( 'components/ui/');
    return config;
  },
};

import nextra from 'nextra';

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
  standalone: true,
});

export default withNextra(nextConfig);