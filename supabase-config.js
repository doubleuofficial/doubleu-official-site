import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xpwgzassajhmlqrjyyon.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhwd2d6YXNzYWpobWxxcmp5eW9uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYyMzIyNTYsImV4cCI6MjA5MTgwODI1Nn0.yuizzF45EItmSe224LutMGNoGcUsgLCUWu-zXVU6o9g'
export const supabase = createClient(supabaseUrl, supabaseKey)
