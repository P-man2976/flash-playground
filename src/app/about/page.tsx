import Link from "next/link";
import { css } from "../../../styled-system/css";
import { vstack } from "../../../styled-system/patterns";

export default function About() {
	return (
		<div className={vstack({ w: "full", alignItems: "center", justify: "center", px: 4, py: 16, gap: 8 })}>
			<header>
				<h1 className={css({ fontSize: "3xl", fontWeight: "bold" })}>このサイトについて</h1>
			</header>
			<p className={css({ lineHeight: 2, fontSize: "sm", color: "neutral.700" })}>
				このWebサイトは、2020年12月にサポートが終了したAdobe Flash Playerを使用したコンテンツを
				<a className={css({ textStyle: "link", layerStyle: "link" })} href="https://ruffle.rs/">
					Ruffle
				</a>
				を用いて復元することを目的として作成されました。
			</p>
			<p className={css({ lineHeight: 2, fontSize: "sm", color: "neutral.700" })}>
				このサイトについてのお問い合わせは、
				<a className={css({ textStyle: "link", layerStyle: "link" })} href="https://github.com/P-man2976/flash-playground">
					GitHub
				</a>
				または
				<a className={css({ textStyle: "link", layerStyle: "link" })} href="https://twitter.com/P_man2976">
					X
				</a>
				へお願いします。
			</p>
			<nav>
				<Link
					href="/"
					role="button"
					className={css({
						bg: "white",
						rounded: "lg",
						shadow: "sm",
						px: 4,
						py: 2,
						textUnderlineOffset: 3,
						layerStyle: "link",
						textStyle: "link",
					})}
				>
					ホームに戻る
				</Link>
			</nav>
		</div>
	);
}
