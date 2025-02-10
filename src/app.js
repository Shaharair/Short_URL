import e from "express";
import path from "path";
import { fileURLToPath } from "url";
const app = e()
app.use(e.json({limit: "1mb"}))
app.use(e.urlencoded({limit: "1mb", extended: true}))

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get("/", (_, res) => {
    res.send("server is running")
})

app.get("*", (_, res) => {
    res.status(404).sendFile(path.join(__dirname, "views", "404.html"))
})

export {app}