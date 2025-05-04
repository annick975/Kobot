import { Job } from './types';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export async function fetchJobs(): Promise<Job[]> {
  const response = await fetch(`${API_URL}/jobs`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch jobs');
  }
  
  return response.json();
}

export async function fetchJobById(id: string): Promise<Job> {
  const response = await fetch(`${API_URL}/jobs/${id}`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch job');
  }
  
  return response.json();
}

export async function createJob(jobData: Omit<Job, 'id'>): Promise<Job> {
  const response = await fetch(`${API_URL}/jobs`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(jobData),
  });
  
  if (!response.ok) {
    throw new Error('Failed to create job');
  }
  
  return response.json();
} 