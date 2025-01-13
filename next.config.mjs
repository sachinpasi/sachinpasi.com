/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_DEPLOY_TIMESTAMP: process.env.VERCEL_GIT_COMMIT_TIMESTAMP,
  },
};

export default nextConfig;
