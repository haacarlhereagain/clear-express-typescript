import express from 'express';
import bodyParser from 'body-parser';
import initRoutes from './routers';

const port = process.env.PORT;
if (!port) {
    throw Error('ERROR: .env.PORT - is not defined');
}

if (Number.isNaN(Number(port))) {
    throw Error(`ERROR: .env.PORT - incorrect value: ${port}`);
}
const app = express();
app.use(bodyParser.json());
app.use('/api/', initRoutes());

app.listen(port, () => {
    console.log(`server active on port: ${port}`);
});
