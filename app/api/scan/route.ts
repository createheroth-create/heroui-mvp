import {NextResponse} from "next/server";
export async function POST(req: Request){
  return NextResponse.json({summary: "Skin analysis (demo): mild dryness, recommend Profhilo; hairline: FUE 1500 grafts suggestion."});
}
