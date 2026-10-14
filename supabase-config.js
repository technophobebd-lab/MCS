import { createClient } from 'https://github.com/technophobebd-lab/MCS.git'

const SUPABASE_URL = 'https://beoniuwvcfzuucjcfelg.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_KZ8CWjiisdXAHiAXCTpVFw_430Y5PwB'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
