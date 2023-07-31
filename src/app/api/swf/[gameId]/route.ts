import { Game } from "@/types";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { gameId: string } }) {
	const { gameId } = params;
	const res = await fetch("http://localhost:3000/games.json");
	const games: Game[] = await res.json();
	const game = games.find(({ id }) => id === gameId);

	if (!game) return new NextResponse(undefined, { status: 404 });

	const swf = await fetch(game.url);

	return swf;
}
