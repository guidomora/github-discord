import { Request, Response } from "express";

export class GihubController {
    constructor () {}

    wehookHandler (req:Request, res:Response) {
        const gitHubEvent = req.header('x-github-event') ?? 'unknown'; // cuand tiene a x es porque es personalizado
        const signature = req.header('x-hub-signature') ?? 'unknown';
        const  body  = req.body;

        console.log({gitHubEvent, signature});
        

        res.json('Hello World')
    }
}