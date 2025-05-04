'use server';

import { createJob as apiCreateJob } from './api';

type JobFormData = {
  title: string;
  company: string;
  location: string;
  description: string;
  howToApply: string;
};

export async function createJob(formData: FormData) {
  // Validate form data
  const jobData: JobFormData = {
    title: formData.get('title') as string,
    company: formData.get('company') as string,
    location: formData.get('location') as string,
    description: formData.get('description') as string,
    howToApply: formData.get('howToApply') as string,
  };
  
  // Basic validation
  if (!jobData.title || !jobData.company || !jobData.location || !jobData.description || !jobData.howToApply) {
    throw new Error('All fields are required');
  }
  
  try {
    // Call the API function to create the job
    await apiCreateJob(jobData);
    
    // Redirect is handled by the form in Next.js
    return { success: true };
  } catch (error) {
    console.error('Error creating job:', error);
    return { success: false, error: 'Failed to create job. Please try again.' };
  }
} 