import withPWA from "next-pwa";

const withPWANextConfig = withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
});

export default withPWANextConfig({
  eslint: {
    ignoreDuringBuilds: true,
  },
  // other Next.js config options here
});
