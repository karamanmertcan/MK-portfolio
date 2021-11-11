import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: 'q6iibaaq',
  dataset: 'production',
  apiVersion: '2021-10-14',
  useCdn: true
});
