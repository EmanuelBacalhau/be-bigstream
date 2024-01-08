import express from 'express';
import 'express-async-errors';

import { router } from './routes';
import { errorHandling } from './middlewares/errorHandling';

const app = express();

app.use(express.json());

app.use('/api', router);

app.use(errorHandling);

const port = 3333 || process.env.PORT;
app.listen(port, () => console.log('🔥 Started server!'));
