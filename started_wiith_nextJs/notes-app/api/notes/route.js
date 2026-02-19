import { connectDB } from "@/lib/db";
import Note from "@/model/Note";
import { NextResponse } from "next/server";


export async function GET(req) {
    try {
        await connectDB();
        const notes = await Note.find({}).sort({createdAt:-1});

        return NextResponse.json({success:true , data :notes})
    } catch (error) {
        return NextResponse.json({success:false , error:error.message})
    }
}

export async function POST(req) {
       try {
        await connectDB();
        const body = await req.json();
        const note = await Note.create(body);
        return NextResponse.json({success:true , data :note}, {status:201})
       } catch (error) {
        return NextResponse.json({success:false , error:error.message}, {status:400})
       }
    }
