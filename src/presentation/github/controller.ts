import { Request, Response } from "express";
import { GithubService } from '../services/github.service';
import { DsicordService } from '../services/discord.service';


export class GithubController {
    constructor (
        private readonly githubService = new GithubService(),
        private readonly discordService = new DsicordService()
    ) {}

    wehookHandler = (req:Request, res:Response) => {
        const gitHubEvent = req.header('x-github-event') ?? 'unknown'; // cuand tiene a x es porque es personalizado
        // const signature = req.header('x-hub-signature') ?? 'unknown';
        const  payload  = req.body;
        let message:string;
        
        switch (gitHubEvent) {
            case 'star':
                message =this.githubService.onStar(payload);
            break;

            case 'issues':
                message =this.githubService.onIssue(payload);
            break;

            default:
                message =`Event ${gitHubEvent} not supported`;
        }
        

    this.discordService.notify(message)
        .then(() => res.status(202).send('Accepted'))
        .catch(() => res.status(500).send('Internal Server Error'))

    }
}