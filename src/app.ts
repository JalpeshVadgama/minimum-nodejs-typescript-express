import * as dotenv from 'dotenv';
import express from 'express';
import ExpressRouter from './express.router';

dotenv.config();

const app = express();
const expressRoutes = new ExpressRouter(app);
expressRoutes.init();

app.listen(process.env.PORT, () => {
  console.log(`Express server app listening on port ${process.env.PORT}!`);
});
