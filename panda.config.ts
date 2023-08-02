import { defineConfig } from "@pandacss/dev";
import { textStyles } from "./src/panda/text-styles";
import { layerStyles } from "./src/panda/layer-styles";

export default defineConfig({
	// Whether to use css reset
	preflight: true,

	// Where to look for your css declarations
	include: ["./src/components/**/*.{js,jsx,ts,tsx}", "./src/app/**/*.{js,jsx,ts,tsx}"],

	// Files to exclude
	exclude: [],

	// Useful for theme customization
	theme: {
		extend: {
			textStyles,
			layerStyles,
			keyframes: {
				loading: {
					"0%": { transform: "rotate(0deg)" },
					"100%": { transform: "rotate(360deg)" },
				},
			},
		},
	},

	// The output directory for your css system
	outdir: "styled-system",
});
