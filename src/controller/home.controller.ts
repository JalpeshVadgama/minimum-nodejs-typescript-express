import { NextFunction, Request, Response } from 'express';

export default class HomeController {
  public static getDefault(req: Request, res: Response, next: NextFunction) {
    res.send('Hello World!');
  }
}
