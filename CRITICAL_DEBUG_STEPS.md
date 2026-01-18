# 🔴 CRITICAL: If You See NO Logs At All

## Immediate Checks

### 1. Is Extension Actually Loaded?

Go to `about:debugging#/runtime/this-firefox` and check:

- ✅ Is "rep+" listed?
- ✅ Any RED error icons?
- ✅ Click "Inspect" - what does the console show?

**If extension shows errors, fix those first!**

### 2. Is Browser Toolbox Enabled?

1. `about:config`
2. Search: `devtools.chrome.enabled`
3. Must be `true` (not false, not default)
4. Restart Firefox if you just changed it

### 3. Are You Opening DevTools?

**CRITICAL:** `devtools.html` only loads when DevTools is OPEN!

1. Open any webpage (e.g., `https://example.com`)
2. **Press F12** to open DevTools
3. **Only then** will `devtools.html` execute
4. Check Browser Toolbox **after** opening DevTools

### 4. Test with Minimal Panel

I created `test-minimal.html` - a super simple test.

1. Reload extension
2. Open DevTools (F12)
3. Look for **"Rep+ Test"** tab
4. If it doesn't appear → extension isn't creating panels
5. If it appears → click it and check Browser Toolbox

### 5. Check Browser Toolbox Location

**Browser Toolbox is a SEPARATE window!**

- Press `Ctrl+Shift+Alt+I`
- A **NEW WINDOW** opens
- That's Browser Toolbox
- Check its **Console** tab
- Filter for "rep+" or "devtools"

### 6. Check for JavaScript Errors

In Browser Toolbox Console, look for:
- **RED error messages**
- Syntax errors
- "Failed to load" messages
- "Uncaught" errors

These prevent scripts from running!

### 7. Verify File Paths

All these files must exist:
```
rep-firefox/
├── manifest.json ✓
├── devtools.html ✓
├── devtools.js ✓
├── panel.html ✓
├── test-minimal.html ✓
└── icons/icon16.png ✓
```

### 8. Test Alert (Uncomment to Test)

In `devtools.html`, I added an alert (commented out).

Uncomment it temporarily:
```javascript
alert('devtools.html script executed!');
```

If you see the alert → scripts ARE running, console just isn't showing logs
If no alert → scripts aren't running at all

### 9. Check Firefox Version

- Help → About Firefox
- Must be **109.0 or later** (as per manifest)

### 10. Try Fresh Profile

Sometimes extensions conflict. Try:
1. Create new Firefox profile
2. Load extension there
3. Test again

## What to Report

If still nothing, please provide:

1. **Extension status screenshot** from `about:debugging`
2. **Browser Toolbox Console screenshot** (after opening DevTools)
3. **Firefox version** (Help → About)
4. **Any errors** shown in `about:debugging` or Browser Toolbox
5. **Does "Rep+ Test" tab appear?** (the minimal test panel)

## Most Likely Issues

1. **Browser Toolbox not enabled** → Enable it in `about:config`
2. **Not opening DevTools** → `devtools.html` only loads when DevTools is open
3. **Looking in wrong console** → Must use Browser Toolbox, not regular console
4. **Extension not loading** → Check `about:debugging` for errors
5. **JavaScript errors** → Check Browser Toolbox for red errors
