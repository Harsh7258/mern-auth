import express from "express";
import dotenv from "dotenv";
dotenv.config()
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";

import usersRoutes from "./routes/userRoutes.js"
import { errorHandler, notFound } from "./middlewares/errorMiddleware.js";

connectDB()
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
const PORT = process.env.PORT || 5000

app.use('/api/users', usersRoutes)
app.get('/', (req, res) => {
    res.send('Server working')
})

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`)
})