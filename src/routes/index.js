import { home } from './home.js';
import { hello } from './hello.js';
import { message, messageSchema } from './message.js';



export async function routes(app) {
  app.get('/', home);
  app.get('/hello', hello);
  app.post('/message',{schema: messageSchema}, message);


}

