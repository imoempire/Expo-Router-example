import { addColumns, schemaMigrations } from '@nozbe/watermelondb/Schema/migrations'

export default schemaMigrations({
 migrations: [
    {
      toVersion: 2,
      steps: [
        addColumns({
          table: 'account',
          columns: [
            { name: 'tap', type: 'number' },
          ],
        }),
      ],
    },
  ],
})