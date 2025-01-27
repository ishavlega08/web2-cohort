import { Client } from "pg";

const pgClient = new Client({
    user: "",
    password: "",
    host: "",
    database: "neondb",
    port: 5432,
    ssl: true
});

async function main() {
    await pgClient.connect();
    const update = await pgClient.query("UPDATE users SET password='ishav121' WHERE id=2");
    const response = await pgClient.query(`SELECT * FROM users`);
    console.log(response.rows);
}

main();