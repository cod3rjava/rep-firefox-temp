// Browser API compatibility layer for Firefox
// Provides unified browser.* API that works in both Chrome and Firefox
// Firefox uses browser.* namespace, Chrome supports both chrome.* and browser.*

const browserAPI = typeof browser !== 'undefined' ? browser : chrome;

// Export the browser API for use throughout the extension
export default browserAPI;

// Helper functions for common operations
export const devtools = browserAPI.devtools;
export const runtime = browserAPI.runtime;
export const storage = browserAPI.storage;
export const webRequest = browserAPI.webRequest;
export const permissions = browserAPI.permissions;
