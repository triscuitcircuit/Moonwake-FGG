//Creates a server application with Express as part of the log in system

import express from 'express';
import cors from 'cors';

import googleRoutes from './routes/google-routes';

const PORT = process.env.PORT || 3001

const app = express();

app.use(
    cors({
        origin: ['http://localhost:5173'],
        methods: 'GET,POST',
    }),
);

app.use(express.json());
app.use('/api/google', googleRoutes);

app.listen(PORT, () => console.log('Server on port', PORT));