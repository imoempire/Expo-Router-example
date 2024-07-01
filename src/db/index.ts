import { Platform } from "react-native";
import { Database } from "@nozbe/watermelondb";
import SQLiteAdapter from "@nozbe/watermelondb/adapters/sqlite";

import schema from "./schema";
import migrations from "./migrations";
import Account from "../models/Account";
// import Post from './model/Post' // ⬅️ You'll import your Models here

// First, create the adapter to the underlying database:
const adapter = new SQLiteAdapter({
  schema,
  migrations,
  jsi: true,
  onSetUpError: (error) => {},
});

// Then, make a Watermelon database from it!
const database = new Database({
  adapter,
  modelClasses: [Account],
});

export { database };

export const accountsCollection = database.get<Account>("account");
