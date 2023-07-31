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

module.exports = nextConfig;
