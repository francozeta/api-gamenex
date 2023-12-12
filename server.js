import express from "express";
import bodyParser from "body-parser";
import path from "path"
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// Configurar middelwares
app.use(bodyParser.urlencoded({ extended: true }));
// Para servir archivos estáticos y de la carpeta public
app.use(express.static("public"));

app.set("views", path.join(__dirname, "app/views"))
app.set("view engine", "ejs");

app.get("/saludo", (req, res) => {
  res.send("Hola mundo!");
});

app.get("/saludo2", (req, res) => {
  const mensaje = "Hola mundo desde la vista EJS";
  res.render("saludo", { mensaje }); // Renderiza la vista "saludo.ejs" con el objeto de datos
});



app.listen(PORT, () => {
  console.log(`El servidor está corriendo en el puerto ${PORT}`);
});
