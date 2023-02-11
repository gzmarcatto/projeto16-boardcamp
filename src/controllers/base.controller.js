import "../database/database.connection.js";
import { db } from "../database/database.connection.js";

export async function postSomething(req, res) {
  try {
    return res.sendStatus(201);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}