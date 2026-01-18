// Simple test script without ES modules
console.log('[rep+] test-simple.js LOADED');

const browserAPI = typeof browser !== 'undefined' ? browser : chrome;

console.log('[rep+] browserAPI:', browserAPI);
console.log('[rep+] devtools:', browserAPI.devtools);

if (browserAPI.devtools && browserAPI.devtools.network) {
    console.log('[rep+] Network API is available!');
    
    browserAPI.devtools.network.onRequestFinished.addListener(function(request) {
        console.log('[rep+] SIMPLE TEST: Request captured!', request.request.url);
    });
    
    console.log('[rep+] SIMPLE TEST: Listener added successfully');
} else {
    console.error('[rep+] SIMPLE TEST: Network API NOT available');
    console.error('[rep+] devtools:', browserAPI.devtools);
}
