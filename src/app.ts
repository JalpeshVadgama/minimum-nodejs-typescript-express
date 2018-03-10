import configuration from "./configuration";
import express from "express";
import ExpressRotuer from "./express.router";


let app = express();
let expresRoutes = new ExpressRotuer(app);
expresRoutes.setRoutes();

app.listen(configuration.port, () => {
	console.log(`Express server app listening on port ${configuration.port}!`)
});
