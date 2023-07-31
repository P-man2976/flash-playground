import { NextResponse } from "next/server";

export async function GET(req: Request) {
	const games = await fetch("http://localhost:3000/games.json");
	const data = await games.json();

	return NextResponse.json(data);
}
