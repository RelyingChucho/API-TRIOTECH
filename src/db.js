import { createPool } from "mysql2/promise";

//Realizar conexion a la BD

export const pool = createPool({
    host: "localhost",
    user: "root",
    password: "JaniceSalinas19",
    port: 3306,
    database: "triotech"
})