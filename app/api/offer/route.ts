import {NextResponse} from "next/server";
export async function POST(req: Request){
  return NextResponse.json({offer: {title: "Ulthera Prime Starter", priceTHB: 8900}});
}
