import { appSchema, tableSchema } from "@nozbe/watermelondb";

export default appSchema({
  version: 7,
  tables: [
    tableSchema({
      name: "account",
      columns: [
        { name: "name", type: "string" },
        { name: "cap", type: "number" },
        { name: "tap", type: "number" },
      ],
    }),
    tableSchema({
      name: "allocations",
      columns: [
        { name: "created_at", type: "number" },
        { name: "income", type: "number" },
      ],
    }),
    tableSchema({
      name: "account_allocations",
      columns: [
        { name: "created_at", type: "number" },
        { name: "amount", type: "number" },
        { name: "cap", type: "number" },
        { name: "account_id", type: "string", isIndexed: true },
        { name: "allocation_id", type: "string", isIndexed: true },
      ],
    }),
  ],
});
