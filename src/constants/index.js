// ----- //
// You need to set the following environment variables.
// In your development environment, put it in a .env.local file or use the default values.
export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080';
export const OAUTH2_REDIRECT_URI = process.env.REACT_APP_OAUTH2_REDIRECT_URI || 'http://localhost:3000/oauth2/redirect'
// ----- //

export const ACCESS_TOKEN = 'accessToken';
export const GOOGLE_AUTH_URL = API_BASE_URL + '/oauth2/authorize/google?redirect_uri=' + OAUTH2_REDIRECT_URI;
