import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://gcflyxdioydtckmrbkpg.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdjZmx5eGRpb3lkdGNrbXJia3BnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg3ODE1NzgsImV4cCI6MTk5NDM1NzU3OH0.0K_oSchWZaO0I74tiXhHZUlnNLOXucZPzbt5ts5Llrc"
);

export default supabase;
