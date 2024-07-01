import {
  addColumns,
  createTable,
  schemaMigrations,
} from "@nozbe/watermelondb/Schema/migrations";

export default schemaMigrations({
  migrations: [
    {
      toVersion: 4,
      steps: [
        createTable({
          name: "allocations",
          columns: [
            { name: "created_at", type: "number" },
            { name: "income", type: "number" },
          ],
        }),
      ],
    },
  ],
});
