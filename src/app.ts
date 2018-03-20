import configuration from './configuration';
import express from 'express';
import ExpressRotuer from './express.router';
import * as dotenv from 'dotenv';

let app = express();
let expresRoutes = new ExpressRotuer(app);
expresRoutes.setRoutes();


app.listen(configuration.port, () => {
	console.log(`Express server app listening on port ${configuration.port}!`)
});
