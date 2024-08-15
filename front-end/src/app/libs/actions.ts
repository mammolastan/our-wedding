"use server"; // This is a server component

import { sql } from "@vercel/postgres";
import { redirect } from "next/navigation";
import pool from "@/app/libs/mysql";
import { NextRequest, NextResponse } from "next/server";
import { formDataType } from "@/types";

export async function createReservation(formData: formDataType) {
  const {
    yourname,
    response,
    notes,
    mymeal,
    numberguests,
    guest1,
    guest2,
    guest3,
    guest1meal,
    guest2meal,
    guest3meal,
  } = formData;

  console.log("in createReservation");

  const theQuery =
    `INSERT INTO \`rsvps\` (\`yourname\`, \`response\`, \`notes\`, \`mymeal\`, \`numberguests\`,\`guest1\`,\`guest2\`,\`guest3\`,\`guest1meal\`,\`guest2meal\`,\`guest3meal\`) ` +
    `VALUES ("` +
    yourname +
    `","` +
    response +
    `","` +
    notes +
    `","` +
    mymeal +
    `","` +
    numberguests +
    `","` +
    guest1 +
    `","` +
    guest2 +
    `","` +
    guest3 +
    `","` +
    guest1meal +
    `","` +
    guest2meal +
    `","` +
    guest3meal +
    `")`;

  try {
    const db = await pool.getConnection();
    // const query = `INSERT INTO \`rsvps\`(\`yourname\`, \`response\`,\`notes\`) VALUES ("${yourname}","${response}","${notes}")`;
    const query = theQuery;
    const result = await db.execute(query);

    db.release();
    console.log("result");
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
