/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    hygraphEndpoint:
      "https://ap-northeast-1.cdn.hygraph.com/content/clsys3nlp056v07w7zb6ws7de/master",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nextui.org",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
