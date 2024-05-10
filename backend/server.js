import express from "express";
import path from "path"
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

if(process.env.NODE_ENV === 'production'){
    const __dirname = path.resolve()
    app.use(express.static(path.join(__dirname, '/frontend/dist')));
    
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
    })
} else {
    app.get('/', (req, res) => {
        res.send('API  is running...')
    })

}

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`)
})