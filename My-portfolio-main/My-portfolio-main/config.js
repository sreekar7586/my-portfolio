// Configuration file for API keys and environment variables
// For production, these should be loaded from environment variables or a secure backend

const CONFIG = {
    // Gemini AI API Configuration
    GEMINI_API: {
        // In production, this should be loaded from environment variables
        // or fetched from a secure backend endpoint
        KEY: 'AIzaSyA582yQ2JKbUNiGDts678dEPxU0Q5fWCXQ', // Your actual API key
        URL: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent'
    },
    
    // Development mode flag
    DEVELOPMENT: true,
    
    // Feature flags
    FEATURES: {
        CHAT_WIDGET: true,
        ANALYTICS: false
    }
};

// Export configuration
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
} else {
    window.CONFIG = CONFIG;
}
