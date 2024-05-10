import { GithubIssuePayload } from "../../interfaces/github-issue.interfaces";
import { GithubStarPayload } from "../../interfaces/github-start.interface";

export class GithubService {
    constructor() { }

    onStar(payload:GithubStarPayload):string {

        const {starred_at, action, sender, repository} = payload;
        
        return  `User ${sender.login} ${action} star on ${repository.full_name}`;
    }

    onIssue(payload:GithubIssuePayload):string{
        let message:string;
        const {action, issue, repository, sender} = payload;

        if (action === 'opened') {
            return ` An issue was opened on ${repository.full_name} with this title ${issue.title}`;
        }

        if (action === 'closed') {
            return ` An issue was closed by ${issue.user.login}`;
        }

        if (action === 'reopened') {
            return` An issue was reopened by ${issue.user.login}`;
        }

        return `Unhandled action for the issue event: ${action}`
    }
}