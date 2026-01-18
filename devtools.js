// Use browser namespace for Firefox WebExtension standard
// Fallback to chrome namespace for compatibility
const browserAPI = typeof browser !== 'undefined' ? browser : chrome;

browserAPI.devtools.panels.create(
    "Rep+",
    "icons/icon16.png",
    "panel.html",
    function (panel) {
        console.log("Rep+ panel created in Firefox DevTools");
    }
);
