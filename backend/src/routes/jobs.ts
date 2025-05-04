import express, { Request, Response, NextFunction, RequestHandler } from 'express';
import { join } from 'path';
import fs from 'fs';
import crypto from 'crypto';

// Define Job interface
interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  description: string;
  howToApply: string;
}

// Define database schema
interface Schema {
  jobs: Job[];
}

const router = express.Router();

// Helper function to generate a unique ID
function generateId(): string {
  return crypto.randomBytes(8).toString('hex');
}

// Setup the database file path
const dbFilePath = join(__dirname, '../data/db.json');

// Helper functions for db operations
async function readDb(): Promise<Schema> {
  try {
    const data = await fs.promises.readFile(dbFilePath, 'utf8');
    return JSON.parse(data) as Schema;
  } catch (error) {
    // If file doesn't exist or is invalid, return empty schema
    return { jobs: [] };
  }
}

async function writeDb(data: Schema): Promise<void> {
  await fs.promises.writeFile(dbFilePath, JSON.stringify(data, null, 2), 'utf8');
}

// Middleware to read the database before each request
router.use(async (req, res, next) => {
  try {
    // Ensure the db file exists with minimal structure
    if (!fs.existsSync(dbFilePath)) {
      await writeDb({ jobs: [] });
    }
    next();
  } catch (error) {
    next(error);
  }
});

// GET all jobs
router.get('/', (async (req, res) => {
  try {
    const data = await readDb();
    res.json(data.jobs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching jobs', error });
  }
}) as RequestHandler);

// GET job by ID
router.get('/:id', (async (req, res) => {
  try {
    const { id } = req.params;
    const data = await readDb();
    const job = data.jobs.find(job => job.id === id);
    
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }
    
    res.json(job);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching job', error });
  }
}) as RequestHandler);

// POST new job
router.post('/', (async (req, res) => {
  try {
    const { title, company, location, description, howToApply } = req.body;
    
    // Validate required fields
    if (!title || !company || !location || !description || !howToApply) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    
    const newJob: Job = {
      id: generateId(),
      title,
      company,
      location,
      description,
      howToApply
    };
    
    const data = await readDb();
    data.jobs.push(newJob);
    await writeDb(data);
    
    res.status(201).json(newJob);
  } catch (error) {
    res.status(500).json({ message: 'Error creating job', error });
  }
}) as RequestHandler);

export default router;