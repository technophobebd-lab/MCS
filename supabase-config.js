import { createClient } from 'https://technophobebd-lab.github.io/MCS/'

const SUPABASE_URL = 'https://beoniuwvcfzuucjcfelg.supabase.co/rest/v1/'
const SUPABASE_ANON_KEY = 'sb_publishable_KZ8CWjiisdXAHiAXCTpVFw_430Y5PwB'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
