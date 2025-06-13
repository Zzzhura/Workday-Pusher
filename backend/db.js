import dotenv from "dotenv";
dotenv.config();

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://varmrdwdwojcrwayoouy.supabase.co";
const supabaseKey = process.env.ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

// Тест подключения
const testDB = async () => {
  try {
    console.log("Testing Supabase connection...");

    const { data, error } = await supabase.from("test").select("*");

    if (error) throw error;

    console.log("Connection successful! Data sample:", data);
  } catch (err) {
    console.error("Connection error:", err.message);
  }
};

await testDB();

export default supabase;
