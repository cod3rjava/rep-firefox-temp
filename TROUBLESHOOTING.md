# Troubleshooting rep+ for Firefox

## Network Requests Not Capturing?

If you're not seeing any network requests being captured, follow these steps:

### 1. **Activate the Network Panel First** ⚠️ IMPORTANT

Firefox requires you to open the **Network panel** in DevTools at least once before the `devtools.network` API will start firing events.

**Steps:**
1. Open DevTools (F12)
2. Click on the **"Network"** tab in DevTools
3. Navigate to a website or refresh the page
4. Now open the **"Rep+"** tab
5. Requests should start appearing

**Why?** Firefox only activates the network monitoring after the user explicitly opens the Network panel. This is a Firefox-specific requirement.

### 2. Check Console for Errors

Open the Browser Console (Ctrl+Shift+J) or DevTools Console and look for:
- `[rep+]` prefixed messages (debug logs)
- Any red error messages
- Messages indicating API availability

### 3. Verify Extension is Loaded Correctly

1. Go to `about:debugging#/runtime/this-firefox`
2. Find your extension
3. Click "Inspect" to see background script console
4. Check for errors there

### 4. Verify DevTools Panel Context

The network listener must run in the DevTools panel context (panel.html), not in background or content scripts.

- ✅ Correct: Listener in `js/main.js` loaded by `panel.html`
- ❌ Wrong: Listener in `background.js`

### 5. Check Manifest Permissions

Make sure your `manifest.json` has:
```json
{
  "permissions": [
    "storage",
    "webRequest",
    "devtools",
    "<all_urls>"
  ],
  "devtools_page": "devtools.html"
}
```

### 6. Firefox Version Compatibility

Ensure you're using Firefox 109.0 or later (as specified in manifest).

### 7. Reload the Extension

After making changes:
1. Go to `about:debugging`
2. Click "Reload" on your extension
3. Close and reopen DevTools
4. Activate Network panel, then Rep+ panel

### 8. Test with Simple Page

Try on a simple page first:
1. Navigate to `https://example.com`
2. Open DevTools → Network panel (activate it)
3. Refresh the page
4. Switch to Rep+ panel
5. You should see requests appear

## Common Issues

### Issue: "browser.devtools.network is not available"
**Solution:** Make sure you opened the Network panel in DevTools at least once.

### Issue: No requests appearing after opening Network panel
**Solution:** 
- Check Browser Console (Ctrl+Shift+J) for errors
- Verify extension is loaded in `about:debugging`
- Make sure `getContent()` is using promises (already fixed in code)

### Issue: Requests appear but no response body
**Solution:** This might be a CORS or content-type issue. Check console for `getContent()` errors.

## Debug Mode

The extension now includes debug logging. Look for messages prefixed with `[rep+]` in:
- DevTools Console (when Rep+ panel is open)
- Browser Console (Ctrl+Shift+J) for background script

## Still Not Working?

1. Check Firefox version: `Help > About Firefox`
2. Check extension console logs
3. Verify all files are loaded (check Network tab in DevTools)
4. Try loading extension in a clean Firefox profile
5. Check if other DevTools extensions are interfering
