
import { createClient } from "@supabase/supabase-js";

// Use Vite env variables. You should put these in your project settings/environment.
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

// Check if fields are set to avoid undefined errors.
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Supabase environment variables are missing. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

