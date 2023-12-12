import express from "express";
import bodyParser from "body-parser";
import path from "path"
import { fileURLToPath } from "url";
import mongoose, { Schema, model } from "mongoose";
import cors from "cors";



const app = express();
const PORT = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


//Base de datos inicializada
const dbName = 'gameNex'
const connectionString = `mongodb+srv://franco2011:Italia098.@cluster0.bsdrvwv.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongoose.connect(connectionString)
	.then(() => {
		console.log(`Successfully connected to DB: ${dbName}`);
	})
	.catch(err => console.log(err));

	const corsOptions = {
		origin: 'http://localhost:5173',
		methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
		credentials: true,
		optionsSuccessStatus: 204,
	};
	
	app.use(cors(corsOptions));
/* 	app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
}); */






// Configurar middelwares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Para servir archivos estáticos y de la carpeta public
app.use(express.static("public"));

app.set("views", path.join(__dirname, "app/views"))
app.set("view engine", "ejs");

const clientSchema = new Schema({
	nameClient: String,
	lastName: String,
	email: String,
	password: String
});

const Client = model('Client', clientSchema);

/* req => objeto que se obtiene por la informacion enviada, res => es el metodo que nos permite enviar informacion al frontend */
app.post("/register", (req, res) => {
	
	console.log('request', req);
	const body = req.body;
	const { names, lastNames, email, password } = body;
	console.log(body);
	const client = new Client({  
		nameClient: names,
		lastName: lastNames,
		email: email,
		password: password
	})

	client.save()
		.then((result) => {
			console.log(result);
			res.status(201).json({ ok: true, message: 'Usuario creado con exito'});
		})
		.catch(err => {
			console.error(err);
			res.status(400).json({ ok: false, message: 'El usuario no se pudo crear'});
		});
})

app.post('/login', async (req, res) => {
	const body = req.body;
	const { email, password } = body;
	const user = await Client.findOne({ email });
	if (!user) {
		return res.status(401).json({ ok:false, message: 'Credenciales inválidas' });
	} 
	if(user.password !== password) {
		return res.status(401).json({ok: false, message: 'La contraseña es incorrecta'});
	}

	res.status(202).json({ok: true, message: 'Bienvenido!', user: user });
})


app.listen(PORT, () => {
  console.log(`El servidor está corriendo en el puerto ${PORT}`);
});
