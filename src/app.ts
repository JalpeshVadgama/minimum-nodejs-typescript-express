import * as dotenv from 'dotenv';
import express from 'express';
import ExpressRotuer from './express.router';

dotenv.config();

const app = express();
const expressRoutes = new ExpressRotuer(app);
expressRoutes.init();

app.listen(process.env.PORT, () => {
  console.log(`Express server app listening on port ${process.env.PORT}!`);
});
