import { getMetaConfigFromTitleLookup } from 'xy-shared';

const titleLookup = {
  index: 'Common Errors',
  'remove-attribution': 'Remove Attribution',
  'migrate-to-v12': 'Migrate to v12',
  'migrate-to-v11': 'Migrate to v11',
  'migrate-to-v10': {
    title: 'Migrate to v10',
    theme: {
      pagination: false,
    },
  },
};

export default getMetaConfigFromTitleLookup(
  titleLookup,
  '/learn/troubleshooting',
);
