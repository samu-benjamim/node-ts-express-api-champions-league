import express, {json, Request, Response} from "express"
import router from "./routes/routes";


function createApp() {

    const app =express()
    
    app.use(json())
    
    app.use("/api", router);

    return app;
}

export default createApp