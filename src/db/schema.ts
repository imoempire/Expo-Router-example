import { appSchema, tableSchema } from "@nozbe/watermelondb";

export default appSchema({
  version: 4,
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
  ],
});
