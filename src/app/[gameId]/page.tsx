"use client";
import { useRef } from "react";
import { css } from "../../../styled-system/css";
import { Game } from "@/types";
import { useRuffle } from "@/hooks/ruffle";
import { vstack } from "../../../styled-system/patterns";
import Spinner from "@/components/Spinner";

export default function Game({ params }: { params: { gameId: string } }) {
	const { gameId } = params;
	const ruffleRef = useRef<HTMLDivElement>(null);

	const { swfLoaded } = useRuffle({
		containerRef: ruffleRef,
		swfUrl: `/api/swf/${gameId}`,
	});

	return (
		<div
			className={css({
				position: "fixed",
				inset: 0,
				bg: "neutral.800",
			})}
		>
			{!swfLoaded && (
				<div className={vstack({ w: "full", h: "full", bg: "neutral.800", alignItems: "center", justify: "center", gap: 8 })}>
					<Spinner />
					<p className={css({ color: "white", fontSize: "4xl", fontWeight: 'light' })}>Loading Flash...</p>
				</div>
			)}
			<div ref={ruffleRef} className={css({ w: "full", h: "full" })} />
		</div>
	);
}
