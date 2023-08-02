import Link from "next/link";
import { Manrope } from "next/font/google";
import { container, vstack } from "../../styled-system/patterns";
import { css } from "../../styled-system/css";
import GameList from "@/components/GameList";

const manrope = Manrope({ subsets: ["latin"] });

export default async function Home() {
	return (
		<div
			className={container({
				display: "flex",
				h: "full",
				px: 4,
				py: 8,
				justifyContent: "center",
			})}
		>
			<div className={vstack({ w: "full", justify: "center", gap: 8, pt: 16 })}>
				<header className={vstack({ w: "full", justify: "center", gap: 8 })}>
					<h1
						className={css({
							fontSize: { base: "8vw", lg: "8xl" },
							fontWeight: "black",
						})}
						style={manrope.style}
					>
						Flash Playground
					</h1>
					<Link
						href="/about"
						className={css({
							layerStyle: "link",
							textStyle: "link",
							textUnderlineOffset: 3,
						})}
					>
						このサイトについて
					</Link>
				</header>
				<GameList />
			</div>
		</div>
	);
}
