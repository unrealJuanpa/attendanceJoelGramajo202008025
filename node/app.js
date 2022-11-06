import express from "express"
import cors from "cors"
import db from "./database/db.js"
import attendanceRoutes from "./routes/routes.js"

const app = express()

app.use(cors())
app.use(express.json())
app.use('/attendances', attendanceRoutes)

try 
{
    await db.authenticate()
    console.log("Conexion completada!")
}
catch (error)
{
    console.log("Error de conexion: " + error)
}

app.listen(8000, () => {
    console.log("Servidor corriendo en: http://localhost:8000/")
})