/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',

  async rewrites() {
    return [
      {
        source: '/favicon.ico',
        destination: 'https://ohsssuk.github.io/dho-cal/favicon.ico',
      },
    ]
  },
};

module.exports = nextConfig;
