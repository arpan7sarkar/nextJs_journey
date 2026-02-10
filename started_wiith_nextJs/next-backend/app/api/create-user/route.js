import { error } from "console";
import { NextResponse } from "next/server";
import { users } from "../hello/route.js"

export async function POST(request) {
    try {
        const { name, email, age } = await request.json();
        if (!name || !email || !age) {
            return NextResponse.json({ success: false, error: "ALl fields needs to be given " })
        }
        const isUserExist = users.find(user => {
            if (user.email === email) {
                return NextResponse.json({ success: false, message: "User already exist" }, { status: 400 })
            }
        });
        if (!isUserExist) {
            const newUser = {
                id: users.length + 1,
                name,
                email, age
            }
            users.push(newUser)
            return NextResponse.json({ success: true, message: users }, { status: 201 })
        }
    } catch (error) {
        return NextResponse.json({ success: false, error: "Something went wrong" })
    }
}