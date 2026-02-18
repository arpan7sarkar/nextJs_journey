import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request) {
    const requestHeader = new Headers(request.headers);
    const authHeader = requestHeader.get("Authorization");
 
    const headerList = await headers();// headers is comming from next js
    const authHeader2= headerList.get("Authorization");


    return NextResponse.json({
        data: "Hello world from profile"
    }, {
        headers: {
            "names": "Arpan, Lol",
            "ok":"Yes bro"
        }
    })

    // return new Response("<h1>Hello Bro</h1>" ,{
    //     headers:{
    //         "Content-Type":"text/html",
    //         "CustomHeader":"its custom",

    //     }
    // });
}