import express from "express";
import {createServer} from "http"
export default function App() {
    const app = express()
    const server = createServer(app)
}

import app from "./"