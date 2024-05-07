import express from "express";
import dotenv from "dotenv";
dotenv.config()

import usersRoutes from "./routes/userRoutes.js"

const app = express()
const PORT = process.env.PORT || 5000

app.use('/api/users', usersRoutes)
app.get('/api', (req, res) => {
    res.send('Server working')
})

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`)
})