import { headers } from "next/headers";
import { NextResponse } from "next/server";
import games from "../../../public/games.json";

export async function GET(req: Request, { params }: { params: { resource: string[] } }) {
	const headersList = headers();
	const referer = headersList.get("referer");

	if (!referer) return new NextResponse(undefined, { status: 400 });

	const gameId = new URL(referer).pathname.match(/\/game\/(.*)$/)?.[1];
	const swf = games.find(({ id }) => gameId === id)?.swf;

	if (!swf) return new NextResponse(undefined, { status: 404 });

	const swfUrl = new URL(swf);
	const swfPath = swfUrl.pathname.match(/(.*\/).+\.swf$/)?.[1];

	return fetch(new URL(swfUrl.origin + swfPath + params.resource.join("/")));
}