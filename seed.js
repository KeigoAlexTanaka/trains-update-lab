const {Planet} = require('./models');
const axios = require('axios');

const main = async () => {
  try{
  	await Planet.destroy({
			where:{}
		});
  	const response= await axios({
			  method:'get',
			  url:'https://wdi-nyc-planets-api.herokuapp.com/planets'
			})
  	await Planet.bulkCreate(response.data.planets);
  } catch(e) {
  	console.log(e.message);
  } finally {	  
	  process.exit()
	}
};

main();