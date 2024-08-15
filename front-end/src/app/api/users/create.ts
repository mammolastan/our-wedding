import { NextResponse } from "next/server";
import pool from "@/app/libs/mysql";

export async function POST() {
  try {
    const db = await pool.getConnection();
    const query =
      'INSERT INTO `account`(`email`, `username`) VALUES ("Josh","Joshy"), ("Steve@steves", "stevey")';
    // const [rows] = await db.execute(query);
    const [result, fields] = await db.query(query);

    console.log("logging result");
    console.log(result);
    console.log(fields);

    db.release();

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      {
        error: error,
      },
      { status: 500 }
    );
  }
}
