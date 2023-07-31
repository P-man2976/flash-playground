import Image from "next/image";
import { hstack, stack, vstack } from "../../styled-system/patterns";
import { css } from "../../styled-system/css";
import { Game } from "@/types";
import Link from "next/link";

export default function GameCard({ id, name, thumbnail, url }: Game) {
	return (
		<Link
			className={hstack({
				w: "full",
				p: { base: 2, md: 0 },
				shadow: "lg",
				bg: "neutral.700",
				overflow: "hidden",
				borderBottom: "1px solid",
				borderColor: "neutral.600",
				_first: { roundedTop: "2xl" },
				_last: { roundedBottom: "2xl", border: "none" },
			})}
			href={id}
		>
			<Image
				src={thumbnail}
				alt={`Image of ${name}`}
				width={40}
				height={40}
				quality={100}
				className={css({
					objectFit: "cover",
					aspectRatio: "1/1",
					w: { base: undefined, md: 20 },
					h: { base: undefined, md: "full" },
					rounded: { base: "lg", md: "unset" },
				})}
			/>
			<div className={vstack({ p: 4 })}>
				<p className={css({ color: "white", fontSize: "lg", fontWeight: "bold" })}>{name}</p>
			</div>
		</Link>
	);
}
