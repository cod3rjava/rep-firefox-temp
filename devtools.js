// Use browser namespace for Firefox WebExtension standard
// Fallback to chrome namespace for compatibility
const browserAPI = typeof browser !== 'undefined' ? browser : chrome;

console.log('[rep+] ===== DevTools script (devtools.js) LOADED =====');
console.log('[rep+] browser:', typeof browser !== 'undefined' ? browser : 'undefined');
console.log('[rep+] chrome:', typeof chrome !== 'undefined' ? chrome : 'undefined');
console.log('[rep+] browserAPI:', typeof browserAPI !== 'undefined' ? browserAPI : 'UNDEFINED');
console.log('[rep+] browserAPI.devtools:', browserAPI?.devtools);

// Check if devtools API is available
if (!browserAPI.devtools || !browserAPI.devtools.panels) {
    console.error('[rep+] ERROR: browser.devtools.panels API is not available!');
    console.error('[rep+] Available APIs:', Object.keys(browserAPI || {}));
} else {
    console.log('[rep+] Creating Rep+ panel...');
    // Create test panel first
    console.log('[rep+] Attempting to create test panel...');
    browserAPI.devtools.panels.create(
        "Rep+ Test",
        "icons/icon16.png",
        "test-minimal.html",
        function (testPanel) {
            if (browserAPI.runtime.lastError) {
                console.error("[rep+] ERROR creating test panel:", browserAPI.runtime.lastError.message);
            } else {
                console.log("[rep+] ✓ Test panel created successfully");
            }
        }
    );
    
    // Create main panel
    console.log('[rep+] Attempting to create main panel...');
    browserAPI.devtools.panels.create(
        "Rep+",
        "icons/icon16.png",
        "panel.html",
        function (panel) {
            if (browserAPI.runtime.lastError) {
                console.error("[rep+] ERROR creating panel:", browserAPI.runtime.lastError.message);
                console.error("[rep+] Error details:", browserAPI.runtime.lastError);
                return;
            }
            console.log("[rep+] ✓ Rep+ panel created successfully in Firefox DevTools");
            
            // Log when panel is shown (helps debug)
            if (panel.onShown) {
                panel.onShown.addListener(function(window) {
                    console.log("[rep+] ✓ Panel shown (visible to user)");
                    console.log("[rep+] Panel window:", window);
                });
            }
            
            if (panel.onHidden) {
                panel.onHidden.addListener(function() {
                    console.log("[rep+] Panel hidden");
                });
            }
        }
    );
}
