import { NextResponse } from "next/server";
import dbConnect from "@/db/dbConnect";
import Todo, { ITodo } from "@/db/models/Todo";

export async function GET() {
  await dbConnect();
  try {
    const todos = await Todo.find({});
    return NextResponse.json({ success: true, data: todos }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: (error as Error).message },
      { status: 400 }
    );
  }
}

export async function POST(req: Request) {
  await dbConnect();
  try {
    const body = await req.json();
    const todo = await Todo.create(body);
    return NextResponse.json({ success: true, data: todo }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: (error as Error).message },
      { status: 400 }
    );
  }
}
