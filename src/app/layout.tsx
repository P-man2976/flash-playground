import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { css } from "../../styled-system/css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Flash Playground",
	description: "Play flash games on modern browsers!",
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
