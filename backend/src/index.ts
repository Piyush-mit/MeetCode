import express, { Request, Response } from 'express';
import { ENV } from './lib/env.js';
import path from 'path';
import { connectDB } from './lib/db.js';
const app = express();
const __dirname = path.resolve();
app.use(express.json())


app.get("/health", (req: Request, res: Response) => {
    res.status(200).json({ message: "hey welcome to meetcode" });
})

if (ENV.NODE_ENV == "production") {
    app.use(express.static(path.join(__dirname, '../frontend/dist')));

    app.get("/{*any}", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
    })
}

const startServer = async () => {
    try {
        await connectDB();
        app.listen(ENV.PORT, () => console.log("Server active on port", ENV.PORT))
    } catch (error) {
        console.error("Error starting the server", error);
    }
}

startServer();
