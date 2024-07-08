import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vttrgwgqjtkzvnsmlsmn.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ0dHJnd2dxanRrenZuc21sc21uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA0NDUwMTIsImV4cCI6MjAzNjAyMTAxMn0.37Uroi6y6-w9owvEc1bZ_OS5QQSx2EiBbZsbozAj3Pw";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
