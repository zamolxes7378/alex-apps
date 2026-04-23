/**
 * Math Consult — Auth Module
 * Supabase authentication wrapper for the learning platform.
 * 
 * CONFIGURATION: Replace SUPABASE_URL and SUPABASE_ANON_KEY with your project values.
 */

const SUPABASE_URL = 'YOUR_SUPABASE_URL';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';

// Initialize Supabase client
let supabase = null;
try {
    if (typeof window.supabase !== 'undefined' && SUPABASE_URL !== 'YOUR_SUPABASE_URL') {
        supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    }
} catch (e) {
    console.warn('Supabase not configured yet.');
}

const mcAuth = {
    /**
     * Sign in with email and password
     */
    async signIn(email, password) {
        if (!supabase) return { data: null, error: { message: 'Supabase non configuré. Contactez l\'administrateur.' } };
        const { data, error } = await supabase.auth.signInWithPassword({ email, password });
        return { data, error };
    },

    /**
     * Sign up with email, password and metadata
     */
    async signUp(email, password, metadata = {}) {
        if (!supabase) return { data: null, error: { message: 'Supabase non configuré. Contactez l\'administrateur.' } };
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: metadata
            }
        });
        return { data, error };
    },

    /**
     * Sign out
     */
    async signOut() {
        if (!supabase) { window.location.href = 'connexion.html'; return; }
        await supabase.auth.signOut();
        window.location.href = 'connexion.html';
    },

    /**
     * Get current user
     */
    async getUser() {
        if (!supabase) return null;
        const { data: { user } } = await supabase.auth.getUser();
        return user;
    },

    /**
     * Get current session
     */
    async getSession() {
        if (!supabase) return null;
        const { data: { session } } = await supabase.auth.getSession();
        return session;
    },

    /**
     * Reset password
     */
    async resetPassword(email) {
        if (!supabase) return { error: { message: 'Supabase non configuré.' } };
        const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
            redirectTo: window.location.origin + '/connexion.html'
        });
        return { data, error };
    },

    /**
     * Update navigation bar based on auth state
     */
    async updateNav() {
        const navAuth = document.getElementById('nav-auth');
        if (!navAuth) return;

        const user = await this.getUser();

        if (user) {
            const name = user.user_metadata?.first_name || user.email.split('@')[0];
            navAuth.innerHTML = `
                <div class="flex items-center gap-3">
                    <a href="espace-eleve.html" class="flex items-center gap-2 text-sm font-semibold text-mc-ebony hover:text-mc-primary transition-colors">
                        <span class="material-symbols-outlined text-xl">account_circle</span>
                        <span class="hidden lg:inline">${name}</span>
                    </a>
                    <button onclick="mcAuth.signOut()" class="text-sm text-mc-body/50 hover:text-mc-primary transition-colors" title="Déconnexion">
                        <span class="material-symbols-outlined text-xl">logout</span>
                    </button>
                </div>
            `;
        } else {
            navAuth.innerHTML = `
                <a href="connexion.html" class="btn-primary text-sm hidden lg:inline-block" style="background-color:#E93F85;color:white;padding:10px 20px;font-weight:600;transition:all 0.2s ease;">Se connecter</a>
            `;
        }
    },

    /**
     * Require auth — redirect to login if not authenticated
     */
    async requireAuth() {
        const user = await this.getUser();
        if (!user) {
            window.location.href = 'connexion.html';
            return null;
        }
        return user;
    }
};

// Auto-update nav on page load
document.addEventListener('DOMContentLoaded', () => {
    mcAuth.updateNav();
});
