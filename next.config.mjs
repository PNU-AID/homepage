/** @type {import('next').NextConfig} */

const isDevelopment = process.env.NODE_ENV === 'developement';

const nextConfig = {
    reactStrictMode: true,
    basePath: isDevelopment ? '' : '/aid-web-nextjs', // nextjs public data 오류 해결
    images: { // GitHub PAge는 SSG 렌더링만 가능함 -> Nextjs Image 최적화 비활성화
        unoptimized: true
    }
};

export default nextConfig;
