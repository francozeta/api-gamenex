import mongoose, { model } from "mongoose";
import { DOUBLE, FLOAT } from "sequelize";
const { Model, Schema } = mongoose;

const dbName = 'gameNex'
const connectionString = `mongodb+srv://franco2011:Italia098.@cluster0.bsdrvwv.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongoose.connect(connectionString)
	.then(() => {
		console.log(`Successfully connected to DB: ${dbName}`);
	})
	.catch(err => console.log(err));

//Schema to the games
const gameSchema = new Schema({ 
	gameName: String,
})
//Creation model for the games
const Game = model('Game', gameSchema);

//Created an instance of the game and save it in the database
const games = [
	{gameName: 'Fortnite'},
	{gameName: 'Valorant'},
	{gameName: 'Minecraft'}
]

Game.insertMany(games)
	.then((res) => {
		console.log(`Game saved successfully: ${res}`);
	})
	.catch(err => console.log(`Error to save game: ${err}`));

//New Schema to the clients
const clientSchema = new Schema({
	nameClient: String,
	lastName: String,
	email: String,
	password: String
});

//Creation of model for the clients
const Client = model('Client', clientSchema);

//Created an instance of the client and save it in the database
const clients = [
	{	nameClient: 'Danny', lastName: 'Smith', email: 'example@hotmail.com', password: 'admin'},
	{	nameClient: 'Franco', lastName: 'Zeta', email: 'example1@hotmail.com', password: 'admin1'},
]

Client.insertMany(clients)
	.then((res) => {
		console.log(`Client saved successfully ${res}`);
	})
	.catch(err => console.log(`Error saving client ${err}`));	