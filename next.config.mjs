/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repository = 'http://ohsssuk.github.io/dho-cal';

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? `/${repository}/` : '', // production 일때 prefix 경로
  trailingSlash: true, // 빌드 시 폴더 구조 그대로 생성하도록
};

export default nextConfig;
