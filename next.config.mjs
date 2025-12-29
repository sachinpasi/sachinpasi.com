import { execSync } from 'child_process';

const getLastCommitDate = () => {
  try {
    const timestamp = execSync('git log -1 --format=%ct').toString().trim();
    return timestamp;
  } catch (e) {
    return 'Jan 1, 2025';
  }
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_DEPLOY_TIMESTAMP:
      process.env.VERCEL_GIT_COMMIT_TIMESTAMP || getLastCommitDate(),
  },
};

export default nextConfig;
