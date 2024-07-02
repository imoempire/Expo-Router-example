import { Platform } from "react-native";
import { Database } from "@nozbe/watermelondb";
import SQLiteAdapter from "@nozbe/watermelondb/adapters/sqlite";

import schema from "./schema";
import migrations from "./migrations";
import Account from "../models/Account";
import Allocation from "../models/Allocation";
import AccountAllocation from "../models/AccountAllocations";

const adapter = new SQLiteAdapter({
  schema,
  migrations,
  jsi: true,
  onSetUpError: (error) => {},
});

const database = new Database({
  adapter,
  modelClasses: [Account, Allocation, AccountAllocation],
});

export { database };

export const accountsCollection = database.get<Account>("account");
export const alloactionsCollection = database.get<Allocation>("allocations");
export const accountAlloactionsCollection = database.get<AccountAllocation>("account_allocations");
