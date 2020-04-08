import config from 'constants/config';
import * as contentful from 'contentful';

if (!process.env.CONTENTFUL_SPACE_ID || !process.env.CONTENTFUL_ACCESS_TOKEN) {
  throw new Error('Contentful access data is missing in .env file');
}

const client: contentful.ContentfulClientApi = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});

export const getAllEntries = (page?: number) =>
  client
    .getEntries({
      limit: config.itemsPerPage,
      skip: (page || 0) * config.itemsPerPage
    })
    .catch((err) => console.log(err));

export const getAllStrilli = (page?: number) =>
  client
    .getEntries({
      content_type: 'strillo',
      limit: config.itemsPerPage,
      skip: (page || 0) * config.itemsPerPage
    })
    .catch((err) => console.log(err));
