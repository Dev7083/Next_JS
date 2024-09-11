import { NextResponse } from "next/server";

export async function GET(req) {
    // console.log(req);

    // Headers
    const requestHeaders = new Headers(req.headers)
    // console.log(requestHeaders);

    // URL QUery Parameter
    const { searchParams } = new URL(req.url)
    // console.log(searchParams);
    // console.log(searchParams);



    // Cookie

    const cook1 = req.cookies
    console.log("Cookie1:", cook1);

    return NextResponse.json({
        "msg": "Hello NEXTJS API"
    })
}