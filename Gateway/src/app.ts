import express from "express"
import { createServer } from "http"
import Config from "./config/config"
import { createProxyMiddleware } from "http-proxy-middleware"

const app = express()
const server = createServer(app)

app.use('/auth', createProxyMiddleware({ target: Config.PROXY.AUTH, changeOrigin: true }));
app.use('/chat', createProxyMiddleware({ target: Config.PROXY.CHAT, changeOrigin: true }));


app.listen(Config.PORT, () => console.log(`Gateway at port ${Config.PORT}`)) 