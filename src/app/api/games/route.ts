import { NextResponse } from "next/server";
import games from '../../../../public/games.json'

export async function GET(req: Request) {
	return NextResponse.json(games)
}
