// @ts-check
const withPWA = require("@ducanh2912/next-pwa").default({
	dest: "public",
	cacheStartUrl: true,
	workboxOptions: {
		runtimeCaching: [
			{
				urlPattern: /^https:\/\/unpkg\.com\/.*/i,
				handler: "CacheFirst",
				options: {
					cacheName: "unpkg-ruffle-assets",
					expiration: {
						maxEntries: 16,
						maxAgeSeconds: 7 * 24 * 60 * 60, // 7 days
					},
				},
			},
			{
				urlPattern: /\/api\/swf\/.*$/i,
				handler: "CacheFirst",
				options: {
					cacheName: "flash-swf",
				},
			},
		],
	},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "archive.org",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "www.mondotv.jp",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "www.gamedesign.jp",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "http",
				hostname: "king-soukutu.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "blog-imgs-73.fc2.com",
				port: "",
				pathname: "/**",
			},
		],
	},
	headers: async () => [
		{
			source: "/swf",
			headers: [
				{
					key: "Content-Security-Policy",
					value: "script-src: 'unsafe-eval'",
				},
			],
		},
	],
};

module.exports = withPWA(nextConfig);
