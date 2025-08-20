import {NextResponse} from "next/server";
export async function POST(req: Request){
  return NextResponse.json({advice: "Based on scan, Ulthera Prime + Profhilo combo. Offer 15% discount this week."});
}
