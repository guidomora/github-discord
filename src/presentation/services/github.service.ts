import { GithubStarPayload } from "../../interfaces/github-start.interface";

export class GithubService {
    constructor() { }

    onStar(payload:GithubStarPayload):string {
        let message:string = '';
        const {starred_at} = payload;
        console.log(starred_at);
        

        return message;
    }
}