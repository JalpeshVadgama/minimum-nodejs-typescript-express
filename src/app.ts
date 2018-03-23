import express from "express";
import ExpressRotuer from "./express.router";
import * as dotenv from "dotenv";
dotenv.config();

let app = express();
let expressRoutes = new ExpressRotuer(app);
expressRoutes.init();

app.listen(process.env.PORT, () => {
  console.log(`Express server app listening on port ${process.env.PORT}!`);
});
