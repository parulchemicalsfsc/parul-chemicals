import { createClient } from '@supabase/supabase-js'

// We use placeholders during build time to prevent the build from crashing
// if environment variables are not yet set in the Vercel dashboard.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
