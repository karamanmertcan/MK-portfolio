import { createClient } from 'next-sanity';
// import {config} from './config'

const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2021-10-14',
  useCdn: process.env.NODE_ENV === 'production'
};

//@ts-ignore
export const sanityClient = createClient(config);

//@ts-ignore
export const previewClient = createClient(config);

// Helper function for easily switching between normal client and preview client
export const getClient = (usePreview?: any) => (usePreview ? previewClient : sanityClient);
