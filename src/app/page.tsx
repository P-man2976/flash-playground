import { container, vstack } from "../../styled-system/patterns";
import GameCard from "@/components/Game";
import games from "../../public/games.json";

export default async function Home() {
	return (
		<div
			className={container({
				display: "flex",
				h: "full",
				py: 8,
				// alignItems: "center",
				justifyContent: "center",
				overflowY: "auto",
			})}
		>
			<div className={vstack({ gap: 0 })}>
				{games.map((game) => (
					<GameCard key={game.id} {...game} />
				))}
			</div>
		</div>
	);
}
