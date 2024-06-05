import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://mbduhlqpzhiarzanmprr.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY
export const supabase = createClient(supabaseUrl, supabaseKey)
