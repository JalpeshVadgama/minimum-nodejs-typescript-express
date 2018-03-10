import { Router, Request, Response, NextFunction } from 'express';
import HomeController from "./controller/home.controller";

export default class ExpressRouter{
    public router : Router;

    constructor(){
        this.router = Router();
        this.init();
    }

    init(){
        this.router.get("/",HomeController.getDefault);
    }
}
