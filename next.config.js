/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.oyoroomscdn.com", "img.freepik.com", "cdn-icons-png.flaticon.com", "cdn.pixabay.com", "sp-orni.s3.eu-west-1.amazonaws.com",
      "sp-orni.s3.eu-west-1.amazonaws.com", "cf.bstatic.com", "www.shutterstock.com", "queensbotanical.org", "png.pngtree.com", "w7.pngwing.com", "encrypted-tbn0.gstatic.com"]
  }
}

module.exports = nextConfig
