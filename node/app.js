import express from 'express'
import cors from 'cors'
import db from './database/db.js' //importar conexión a DB
import blogRoutes from './routes/routes.js'//importar el enrutador

const app = express()

app.use(cors())
app.use(express.json())
app.use('/blogs', blogRoutes)

try {
    await db.authenticate()
    console.log('Conexión exitosa a la DB')
} catch (error) {
    console.log(`El error de conexión es:${error}`)
}


app.get('/', (req, res) => {
    res.send('HOLA MUNDO')
})

app.listen(8000, () => {
    console.log('server UP running in http://localhost:8000/')
})