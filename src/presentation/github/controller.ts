import { Request, Response } from "express";
import { GithubService } from '../services/github.service';


export class GithubController {
    constructor (
        private readonly githubService = new GithubService()
    ) {}

    wehookHandler (req:Request, res:Response) {
        const gitHubEvent = req.header('x-github-event') ?? 'unknown'; // cuand tiene a x es porque es personalizado
        // const signature = req.header('x-hub-signature') ?? 'unknown';
        const  payload  = req.body;
        
        switch (gitHubEvent) {
            case 'star':
                this.githubService.onStar(payload);
            break;

            default:
                console.log(`Event ${gitHubEvent} not supported`);
        }
        

        res.json('Hello World')
    }
}