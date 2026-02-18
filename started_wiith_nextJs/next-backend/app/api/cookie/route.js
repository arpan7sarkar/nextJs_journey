import {NextResponse} from "next/server"
import { cookies} from "next/headers"
export async function GET(request) {
    
    const randomCookie = request.cookies.get("randomCookie");

    const cookieStore = await cookies()
    const randomCookie2 = cookieStore.get("randomCookie");

    return NextResponse.json({
        message:"Cookie read succsessfully"
    },{
        // setting the cookie
        headers:{
            "Set-Cookie":"randomCookie = value"
        }
    })

    // another more optimal appproch 

    cookieStore.set("randomCookie","value")
    cookieStore.delete("randomCookie")

}