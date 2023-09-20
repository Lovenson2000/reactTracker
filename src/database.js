

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://kaliynrbtokqgddcqdgj.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImthbGl5bnJidG9rcWdkZGNxZGdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUwMjY2NzcsImV4cCI6MjAxMDYwMjY3N30.9g1widhziJMX2QlOyHdlZkHs86FBzFnyQHQG7fHw4eo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;