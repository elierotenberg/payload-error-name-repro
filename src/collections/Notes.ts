import type { CollectionConfig } from 'payload'

import { APIError } from 'payload'

/**
 * Rejects every create with a public 403 APIError, to show the message that
 * the REST API returns.
 */
export const Notes: CollectionConfig = {
  slug: 'notes',
  access: {
    create: () => true,
  },
  fields: [{ name: 'title', type: 'text' }],
  hooks: {
    beforeChange: [
      () => {
        throw new APIError('Notes are read-only in this reproduction', 403)
      },
    ],
  },
}
