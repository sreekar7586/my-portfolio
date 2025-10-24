# Portfolio Website - Setup Instructions

## API Key Configuration

This portfolio includes an AI chat widget that requires a Gemini API key. Follow these steps to set it up:

### Option 1: Using config.js (Recommended for development)

1. Open `config.js`
2. Replace `'YOUR_API_KEY_HERE'` with your actual Gemini API key:
   ```javascript
   GEMINI_API: {
       KEY: 'your-actual-api-key-here',
       URL: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent'
   }
   ```

### Option 2: Using Environment Variables (Recommended for production)

1. Set the environment variable:
   ```bash
   export GEMINI_API_KEY=your-actual-api-key-here
   ```

### Getting a Gemini API Key

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Create a new API key
4. Copy the key and use it in your configuration

## Security Notes

- **Never commit API keys to version control**
- The `config.js` file is included in the repository with a placeholder
- For production deployment, use environment variables
- The chat widget will gracefully handle missing API keys

## Features

- Responsive design
- AI-powered chat widget
- Modern glassmorphism UI
- Smooth animations
- Mobile-optimized

## File Structure

```
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
├── config.js           # Configuration file
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

## Deployment

When deploying to production:

1. Set `GEMINI_API_KEY` as an environment variable on your hosting platform
2. Consider implementing a backend proxy for API calls for additional security
3. Remove or secure the config.js file

## Contact

For questions about setup, please reach out to Mamidipaka Venkata Sai Sreekar.
<!-- Old: Vamsi Siva Ganesh Seelam -->
