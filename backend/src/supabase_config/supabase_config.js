const fetch = require("node-fetch");
const { createClient } = require("@supabase/supabase-js");

// Initialize the Supabase client
const supabase = createClient(
  "https://axxrijyxejcdblkrwxpl.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF4eHJpanl4ZWpjZGJsa3J3eHBsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYwMzgzNjQsImV4cCI6MjAzMTYxNDM2NH0.IlWJrkHNVpWf_sf0LxRRFzdL_Pl4PD3vfO-Bku9m8cw"
);


module.exports = {
  supabase,
};
