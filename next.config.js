/** @type {import('next').NextConfig} */
const nextConfig = {
    test: /\.jsx?$/,
    loader: "babel-loader",
    exclude: /node_modules/,
    query: {
        presets: ["es2015"],
    },
};

module.exports = nextConfig;
