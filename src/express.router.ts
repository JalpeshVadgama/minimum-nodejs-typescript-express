import { Router, Request, Response, NextFunction,Express} from "express";
import HomeController from "./controller/home.controller";

export default class ExpressRouter{
    
    public router : Router;
    private app: Express;

    constructor(app: Express){
        this.router = Router();
        this.app = app;
        this.init();
    }

    init(): any{
        //Home controller routes 
        this.router.get("/",HomeController.getDefault);
    }

    setRoutes():any{
        this.app.use("/", this.router);
    }
}
