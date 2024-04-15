import express from 'express'
import { envs } from './config';
import { GihubController } from './presentation/github/controller';





(() => {
  main()
})()

function main() {
  const app = express();
  const controller = new GihubController();

  app.use(express.json())

  app.post('/api/github', controller.wehookHandler)

  app.listen(envs.PORT, () => {
    console.log(`Server is running on port ${envs.PORT}`);
    
  })
}