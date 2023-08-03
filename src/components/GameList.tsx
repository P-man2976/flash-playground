"use client";
import { useState } from "react";
import { grid, hstack, vstack } from "../../styled-system/patterns";
import games from "../../public/games.json";
import GameCard from "./Game";
import SizeToggle from "./card/SizeToggle";
import SortSelect from "./card/SortSelect";

export type GameSort = "ascend" | "descend" | "liked";
export type CardSize = "sm" | "md" | "lg";

export default function GameList() {
	const [sort, setSort] = useState<GameSort>("liked");
	const [size, setSize] = useState<CardSize>("lg");

	return (
		<div
			className={vstack({
				w: "full",
				gap: 8,
			})}
		>
			<div
				className={hstack({
					w: "full",
					justify: "space-between",
				})}
			>
				<SortSelect sort={sort} onChange={setSort} />
				<SizeToggle size={size} onChange={(val) => val && setSize(val)} />
			</div>
			<div
				className={grid({
					w: "full",
					columns: size === "lg" ? { base: 1, sm: 2, md: 3, lg: 4 } : 1,
					rowGap: size === "lg" ? 12 : 0,
					columnGap: 8,
					rounded: 'xl',
					shadow: size === 'lg' ? 'none' : 'md'
				})}
			>
				{games.map((game) => (
					<GameCard key={game.id} {...game} size={size} />
				))}
			</div>
		</div>
	);
}
