import express, { Request, Response, NextFunction, RequestHandler } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import jobsRouter from './routes/jobs';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/jobs', jobsRouter);

// Root route
app.get('/', ((req, res) => {
  res.json({ message: 'Welcome to Rwanda Jobs API' });
}) as RequestHandler);

// Error handling middleware
app.use(((err: Error, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
}) as express.ErrorRequestHandler);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
