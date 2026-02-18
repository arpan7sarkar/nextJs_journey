import { NextResponse } from "next/server";
import { users } from "../hello/route.js"

export async function PUT(request) {
  try {
    const { name, email, age } = await request.json();

    if (!name || !email || !age) {
      return NextResponse.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    const user = users.find(u => u.email === email);

    if (!user) {
      return NextResponse.json(
        { success: false, message: "User does not exist" },
        { status: 404 }
      );
    }

    user.name = name;
    user.age = age;

    return NextResponse.json(
      { success: true, message: user },
      { status: 200 }
    );

  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Something went wrong" },
      { status: 500 }
    );
  }
}
