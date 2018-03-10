import configuration from "./configuration";
import express from "express";

let app = express();

app.get("/", (req :express.Request, res : express.Response) => {
	res.send("Hello World!");
});

app.listen(configuration.port, () => {
	console.log(`Express server app listening on port ${configuration.port}!`)
});
