"use client";
import { useRef } from "react";
import { css } from "../../../../styled-system/css";
import { Game } from "@/types";
import { useRuffle } from "@/hooks/ruffle";
import { vstack } from "../../../../styled-system/patterns";
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
				bg: "neutral.100",
			})}
		>
			{!swfLoaded && (
				<div className={vstack({ w: "full", h: "full", bg: "neutral.100", alignItems: "center", justify: "center", gap: 6 })}>
					<Spinner />
					<p className={css({ fontSize: "2xl", fontWeight: "bold" })}>読み込み中...</p>
					<p className={css({ color: "neutral.600", fontSize: "sm" })}>初回の読み込みは時間がかかる場合があります</p>
				</div>
			)}
			<div ref={ruffleRef} className={css({ w: "full", h: "full" })} />
		</div>
	);
}
