import { defineLayerStyles } from "@pandacss/dev";

export const layerStyles = defineLayerStyles({
	link: {
		description: "Layer style for link",
		value: {
			color: "blue.500",
			_hover: { color: "blue.400" },
		},
	},
});
