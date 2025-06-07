import fastify from "fastify"
import dotenv from "dotenv"
dotenv.config()
import mongoose from "mongoose"
import cors from "@fastify/cors"
import routes from "./routes/portfolio.routes.js"

const server = fastify()
server.register(cors)

mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => console.log("Connected to the database!"))
    .catch((e) => console.log("Error connecting to database!", e.message));




server.register(routes, { prefix: "/api/v1/portfolio" });

const PORT = process.env.PORT || 4000
const host = ("RENDER" in process.env) ? `0.0.0.0` : `localhost`;


server.listen({host: host, port: PORT }, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log(PORT)
    }
})