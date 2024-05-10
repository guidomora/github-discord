import express from 'express'
import { envs } from './config';
import { GithubController } from './presentation/github/controller';
import { GithubVerify } from './presentation/middlewares/github-sha256.middleware';






(() => {
  main()
})()

function main() {
  const app = express();
  const controller = new GithubController();

  app.use(express.json())

  app.use(GithubVerify.verifySignature)

  app.post('/api/github', controller.wehookHandler)

  app.listen(envs.PORT, () => {
    console.log(`Server is running on port ${envs.PORT}`);
    
  })
}