import express from 'express';
import { router } from './routes';

const app = express();

app.use('/api', router);

const port = 3333 || process.env.PORT;
app.listen(port, () => console.log('🔥 Started server!'));
