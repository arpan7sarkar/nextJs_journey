import { NextResponse } from "next/server";


export const users = [
    {
        id: 1,
        name: "Alex Johnson",
        age: 28,
        email: "alex.johnson@example.com"
    },
    {
        id: 2,
        name: "Maria Lopez",
        age: 34,
        email: "maria.lopez@example.com"
    },
    {
        id: 3,
        name: "Ethan Kim",
        age: 22,
        email: "ethan.kim@example.com"
    }
];


export async function GET(request) {
    try {

        const searchParams = request.nextUrl.searchParams;
        // we have to use get for getting something from param
        const name  = searchParams.get("name");
        const age  = searchParams.get("age");

        return NextResponse.json({ success: true, data: users });
    } catch (error) {
        return NextResponse.json({ success: false, error: "some error is occured" })
    }
} 