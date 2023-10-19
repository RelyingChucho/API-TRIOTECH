import express from "express";
import clientRouter from "./routes/cliente.routes.js";
import equipoRouter from "./routes/equipo.routes.js";
import mantenimientoRouter from "./routes/mantenimiento.routes.js";
import tecnicoRouter from "./routes/tecnico.routes.js";

//IMPORTAR LAS VARIABLES DE ENTORNO
import './config.js'
const app = express()

app.use(express.json())
app.use("/api", clientRouter);
app.use("/api", equipoRouter);
app.use("/api", mantenimientoRouter);
app.use("/api", tecnicoRouter);


//MANEJO DE ERRORES CUANDO LA RUTA NO ES ENCONTRADA
app.use((req,res,next)=>{
  res.status(404).json({
    message:"Ruta no encontrada, verifique"
  })
})

export default app;