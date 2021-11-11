import { createClient } from 'next-sanity';
// import {config} from './config'
export const sanityClient = createClient({
  projectId: 'q6iibaaq',
  dataset: 'production',
  apiVersion: '2021-10-14'
});

export const previewClient = createClient({
  projectId: 'q6iibaaq',
  dataset: 'production',
  apiVersion: '2021-10-14',
  useCdn: false,
  token:
    'skwK1ovLO4BGMCZvR8dY1qufPH0MKeGHnwIADbeNINP2kxdYk3cFXLPc8Dz9VDB7k1pHIeVXoeN5dc1Eb3qK1zmkZWJv5002b8bfAaHYADlfoBchzf9mLxaE4IeVqrW9t68zVNsEhzOEW8MtpHsypipqfSHjJpzTcjl1KMyF24XXONKI69NR'
});

// Helper function for easily switching between normal client and preview client
export const getClient = (usePreview?: any) => (usePreview ? previewClient : sanityClient);
