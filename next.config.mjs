/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com"],
  },
  transpilePackages: ["three", "@react-three/fiber", "@react-three/drei"],
  // Turbopack configuration (stable)
  turbopack: {
    rules: {
      // Handle shader files if needed
      "*.glsl": {
        loaders: ["raw-loader"],
        as: "*.js",
      },
      "*.vert": {
        loaders: ["raw-loader"],
        as: "*.js",
      },
      "*.frag": {
        loaders: ["raw-loader"],
        as: "*.js",
      },
    },
    resolveExtensions: [".mdx", ".tsx", ".ts", ".jsx", ".js", ".mjs", ".json"],
  },
  webpack: (config, { dev, isServer }) => {
    // Only configure webpack when Turbopack is not being used
    if (!config.name?.includes("turbopack")) {
      config.externals.push({
        "utf-8-validate": "commonjs utf-8-validate",
        bufferutil: "commonjs bufferutil",
      });

      // Handle Three.js module resolution for webpack
      config.module.rules.push({
        test: /\.(glsl|vs|fs|vert|frag)$/,
        use: ["raw-loader"],
      });
    }

    return config;
  },
};

export default nextConfig;
