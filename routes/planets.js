const express = require('express');
const app = express();
const {Planet} = require('../models');
const planetRouter=express.Router();
const axios = require('axios');

planetRouter.get('/', async (req, res) => {
  res.json(await Planet.findAll());
});

planetRouter.get('/id/:id', async (req, res) => {
  res.json(await Planet.findByPk(req.params.id));
});


planetRouter.post('/create', async (req, res) => {
	await Planet.create(req.body);
});

planetRouter.get('/random', async (req, res) => {
	try{
		const response= await axios({
			  method:'get',
			  url:'https://wdi-nyc-planets-api.herokuapp.com/planets/random'
			})
		res.send(response.data.planet);
	} catch (e) {
		console.log(e.message);
	}
});

planetRouter.delete('/delete/:id', async (req, res) => {
	await Planet.destroy({
		where:{
			id:req.params.id
		}
	})
});


module.exports={
  planetRouter
}