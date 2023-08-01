import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { css } from "../../styled-system/css";

const inter = Inter({ subsets: ["latin"] });

const title = {
	default: "Flash Playground",
	template: "%s - Flash Playground",
};
const description = "懐かしのあのFlashゲームをもう一度";

export const metadata: Metadata = {
	title,
	description,
	manifest: "/manifest.json",
	keywords: ["Adobe", "Flash", "Adobe Flash", "Game", "Flash Game"],
	appleWebApp: {
		capable: true,
		statusBarStyle: "default",
		title: title.default,
	},
	formatDetection: {
		date: false,
		email: false,
		address: false,
		telephone: false,
	},
	openGraph: {
		type: "website",
		siteName: "Flash Playground",
		title,
		description,
		locale: "ja_JP",
	},
	twitter: {
		card: "summary",
		title,
		description,
		creator: "@P_man2976",
		images: ["/icon-512x512.png"],
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="ja">
			<body className={inter.className}>
				<main
					className={css({
						w: "100dvw",
						h: "100dvh",
						bg: "neutral.800",
					})}
				>
					{children}
				</main>
			</body>
		</html>
	);
}
