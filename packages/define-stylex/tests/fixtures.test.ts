import { testFixtures } from '@vue-macros/test-utils'
import { describe } from 'vitest'
import { transformDefineStyleX } from '../src/core'

describe('fixtures', async () => {
  await testFixtures(
    import.meta.glob('./fixtures/*.{vue,js,ts}', {
      eager: true,
      as: 'raw',
    }),
    (args, id, code) => transformDefineStyleX(code, id)?.code,
  )
})
