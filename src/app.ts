import configuration from "./configuration";
import express from "express";
import ExpressRotuer from "./exxpress.router";

let app = express();

app.listen(configuration.port, () => {
	console.log(`Express server app listening on port ${configuration.port}!`)
});
