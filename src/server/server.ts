import * as express from 'express';
import apiRouter from './routes';
import { clientHandler, CLIENT_ROUTES } from './middleware/client-handler';
const app = express();

app.use(express.json())

app.use(express.static('public'));
app.use(apiRouter);
app.get(CLIENT_ROUTES, clientHandler);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
