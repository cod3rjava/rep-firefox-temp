// Use browser namespace for Firefox WebExtension standard
// Fallback to chrome namespace for compatibility
const browserAPI = typeof browser !== 'undefined' ? browser : chrome;

console.log('[rep+] DevTools script loaded, creating panel...');

// Check if devtools API is available
if (!browserAPI.devtools || !browserAPI.devtools.panels) {
    console.error('[rep+] ERROR: browser.devtools.panels API is not available!');
} else {
    browserAPI.devtools.panels.create(
        "Rep+",
        "icons/icon16.png",
        "panel.html",
        function (panel) {
            console.log("[rep+] Rep+ panel created in Firefox DevTools");
            
            // Log when panel is shown (helps debug)
            panel.onShown.addListener(function(window) {
                console.log("[rep+] Panel shown");
            });
            
            panel.onHidden.addListener(function() {
                console.log("[rep+] Panel hidden");
            });
        }
    );
}
