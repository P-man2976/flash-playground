import Image from "next/image";
import { hstack, vstack } from "../../styled-system/patterns";
import { css } from "../../styled-system/css";
import { Game } from "@/types";
import Link from "next/link";
import { CardSize } from "./GameList";

export default function GameCard({ size, id, name, thumbnail, description }: Game & { size: CardSize }) {
	switch (size) {
		case "lg":
			return (
				<Link
					role="article"
					className={vstack({
						w: "full",
						bg: "white",
						gap: 4,
						rounded: "2xl",
						shadow: "xl",
						overflow: "hidden",
						transition: "box-shadow .4s ease",
						_hover: { shadow: "2xl" },
					})}
					href={`/${id}`}
				>
					<Image
						src={thumbnail}
						alt={`${name}のサムネイル画像`}
						width={540}
						height={480}
						className={css({
							objectFit: "cover",
							w: "full",
							aspectRatio: "16/9",
						})}
					/>
					<div className={vstack({ p: 4 })}>
						<h2 className={css({ fontSize: "xl", fontWeight: "bold" })}>{name}</h2>
						<p className={css({ fontSize: "sm", color: "neutral.600" })}>{description}</p>
					</div>
				</Link>
			);

		case "md":
			return (
				<Link
					role="article"
					className={hstack({
						w: "full",
						bg: "white",
						p: 4,
						gap: 4,
						borderBottom: "1px solid",
						borderColor: "neutral.100",
						_first: { roundedTop: "xl" },
						_last: { roundedBottom: "xl", border: "none" },
					})}
					href={`${id}`}
				>
					<Image
						src={thumbnail}
						alt={`${name}のサムネイル画像`}
						width={120}
						height={80}
						className={css({
							objectFit: "cover",
							aspectRatio: "1/1",
							w: 20,
							rounded: "lg",
						})}
					/>
					<div className={vstack({ alignItems: "flex-start", gap: 1 })}>
						<h2 className={css({ fontSize: "lg", fontWeight: "bold", lineClamp: 1 })}>{name}</h2>
						<p className={css({ fontSize: "sm", color: "neutral.600", lineClamp: 1 })}>{description}</p>
					</div>
				</Link>
			);

		case "sm":
			return (
				<Link
					role="article"
					className={hstack({
						w: "full",
						bg: "white",
						px: 4,
						py: 2,
						gap: 4,
						borderBottom: "1px solid",
						borderColor: "neutral.100",
						_first: { roundedTop: "xl" },
						_last: { roundedBottom: "xl", border: "none" },
					})}
					href={`${id}`}
				>
					<Image
						src={thumbnail}
						alt={`${name}のサムネイル画像`}
						width={80}
						height={80}
						className={css({
							objectFit: "cover",
							aspectRatio: "1/1",
							w: 10,
							rounded: "lg",
						})}
					/>
					<h2 className={css({ fontSize: "lg", fontWeight: "bold", lineClamp: 1 })}>{name}</h2>
				</Link>
			);
		default:
			return null;
	}
}
