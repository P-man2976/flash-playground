import { NextResponse } from "next/server";
import games from "../../../../../public/games.json";

export async function GET(req: Request, { params }: { params: { gameId: string } }) {
	const { gameId } = params;
	const game = games.find(({ id }) => id === gameId);

	return game ? NextResponse.json(game) : new NextResponse(undefined, { status: 404 });
}
