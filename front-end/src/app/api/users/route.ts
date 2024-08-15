import { NextResponse } from "next/server";
import pool from "@/app/libs/mysql";

export async function GET() {
  try {
    const db = await pool.getConnection();
    const query =
      'INSERT INTO `account`(`email`, `username`) VALUES ("Josh","Joshy"), ("Steve@steves", "stevey")';
    const [rows] = await db.execute(query);
    db.release();

    return NextResponse.json(rows);
  } catch (error) {
    return NextResponse.json(
      {
        error: error,
      },
      { status: 500 }
    );
  }
}
