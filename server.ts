import * as express from 'express';
const axios = require('axios').default;
const app = express();
const port : number = Number(process.env.PORT) || 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
	const requestURL = 'https://restcountries.eu/rest/v2/name/eesti';

	axios.get(requestURL)
		.then(function (response) {
			console.log(response.data);
			res.render('index', {data: response.data});
		})
		.catch(function (error) {
			console.log(error);
		});
});

app.listen(port, () => {
	console.log(`listening on ${port}`);
});