import { RefObject, useState, useEffect } from "react";

export const useRuffle = ({
	containerRef,
	swfUrl,
	onSwfLoad,
}: {
	containerRef: RefObject<HTMLDivElement>;
	swfUrl: string;
	onSwfLoad?: () => void;
}) => {
	const [scriptLoaded, setScriptLoaded] = useState(false);
	const [swfLoaded, setSwfLoaded] = useState(false);

	// Load Ruffle script
	useEffect(() => {
		const script = document.createElement("script");

		script.src = "https://unpkg.com/@ruffle-rs/ruffle";
		script.async = true;
		script.onload = () => setScriptLoaded(true);

		document.body.appendChild(script);

		return () => {
			document.body.removeChild(script);
		};
	}, []);

	// Attach Ruffle to DOM after script is loaded
	useEffect(() => {
		if (!window.RufflePlayer) return;

		const ruffle = window.RufflePlayer.newest();
		const player = ruffle.createPlayer();
		containerRef.current?.appendChild(player);
		const containerRefValue = containerRef.current;

		player.config = {
			autoPlay: "on",
			unmuteOverlay: "hidden",
			letterbox: "off",
			maxExecutionDuration: 100000,
			splashScreen: false,
			base: '/'
		};

		player.style.width = "100%";
		player.style.height = "100%";

		player.addEventListener("loadeddata", () => {
			setSwfLoaded(true);
		});

		player
			.load(swfUrl, {
				allowScriptAccess: false, // if false swf cant interact with page (recommended false)
			})
			.then(() => {
				console.log("[Ruffle] SWF loaded successfully");
			})
			.catch((error: Error) => {
				console.error("[Ruffle] Falied to load SWF: ", error);
			});

		return () => {
			containerRefValue?.removeChild(player);
		};
	}, [scriptLoaded]); // eslint-disable-line react-hooks/exhaustive-deps

	return {
		swfLoaded,
	};
};
