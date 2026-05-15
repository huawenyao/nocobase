/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

import profile from './profile';

export default {
  username: 'data-maintenance',
  category: 'developer',
  description: 'AI employee for data maintenance and mock data generation',
  profile,
  skillSettings: {
    skills: [
      {
        name: 'getDataSources',
        autoCall: true,
      },
      {
        name: 'getCollectionNames',
        autoCall: true,
      },
      {
        name: 'getCollectionMetadata',
        autoCall: true,
      },
      {
        name: 'searchDocs',
        autoCall: true,
      },
      {
        name: 'getContextApis',
        autoCall: true,
      },
      {
        name: 'generateMockData',
        autoCall: true,
      },
      {
        name: 'validateData',
        autoCall: true,
      },
      {
        name: 'executeSQL',
        autoCall: false,
      },
      {
        name: 'batchCreateRecords',
        autoCall: false,
      },
      {
        name: 'batchUpdateRecords',
        autoCall: false,
      },
      {
        name: 'batchDeleteRecords',
        autoCall: false,
      },
      {
        name: 'importData',
        autoCall: false,
      },
      {
        name: 'exportData',
        autoCall: false,
      },
    ],
  },
};
