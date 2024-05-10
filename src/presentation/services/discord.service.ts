import { envs } from "../../config";

export class DsicordService {
    private readonly discordWebhookUrl = envs.DISCORD_WEBHOOK_URL
    
    constructor() { }

    async notify(message:string) {
        const body ={
            content: message,
        }

        const resp = await fetch(this.discordWebhookUrl, {
            method: 'POST',
            headers: { // headers es un objeto que tiene la configuracion de la peticion
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })

        if (!resp.ok) {
            console.error('Error sending message to discord');
            return false
        }

        return true
    }
}