import { Express, NextFunction, Request, Response, Router } from 'express';
import HomeController from './controller/home.controller';

export default class ExpressRouter {
  public router: Router;
  private app: Express;

  constructor(app: Express) {
    this.router = Router();
    this.app = app;
  }

  public init(): void {
    this.router.get('/', HomeController.getDefault);
    this.app.use('/', this.router);
  }
}
