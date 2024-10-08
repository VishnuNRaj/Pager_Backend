import { Application } from "express"
import { createServer, Server } from "http"

export default function httpServer(app: Application): Server {
    const server = createServer(app)
    return server;
}
