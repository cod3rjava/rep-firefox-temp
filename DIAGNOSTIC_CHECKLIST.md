# Diagnostic Checklist - No Logs Appearing

If you see **NO logs at all** (not even in Browser Toolbox), follow this checklist:

## Step 1: Verify Extension is Loaded

1. Go to `about:debugging#/runtime/this-firefox`
2. Look for "rep+" in the list
3. **Check for RED errors** - if you see errors, the extension failed to load
4. Click "Inspect" button next to your extension
5. Check the console that opens - any errors there?

## Step 2: Check Manifest Errors

1. In `about:debugging`, look at your extension
2. If there's a red error icon, click it
3. Common errors:
   - Invalid JSON syntax
   - Missing required fields
   - Invalid file paths

## Step 3: Verify File Paths

Check these files exist:
- `devtools.html` ✓
- `devtools.js` ✓
- `panel.html` ✓
- `icons/icon16.png` ✓

## Step 4: Test with Minimal Panel

I've created `test-minimal.html` - a super simple test panel.

1. Reload extension
2. Open DevTools
3. Look for **"Rep+ Test"** tab (in addition to "Rep+")
4. Click it - you should see "Rep+ Test Panel" text
5. Check Browser Toolbox Console for logs

If "Rep+ Test" panel doesn't appear, the extension isn't loading panels at all.

## Step 5: Check Browser Toolbox

1. **Enable Browser Toolbox:**
   - `about:config` → `devtools.chrome.enabled` = `true`

2. **Open Browser Toolbox:**
   - `Ctrl+Shift+Alt+I` (or `Cmd+Opt+Shift+I` on Mac)

3. **Check Console tab** in Browser Toolbox

4. **Filter for "rep+"** in the console filter box

## Step 6: Check for JavaScript Errors

In Browser Toolbox Console, look for:
- **RED errors** - these prevent scripts from running
- Syntax errors
- Module loading errors
- File not found errors

## Step 7: Verify DevTools is Open

The `devtools.html` only loads when DevTools is open!

1. Open any webpage
2. Press F12 to open DevTools
3. **Only then** will `devtools.html` load
4. Check Browser Toolbox Console **after** opening DevTools

## Step 8: Test with Alert

I can add an `alert()` to confirm scripts run. If you see the alert, scripts are loading but console isn't working.

## What to Report

If still nothing, please report:

1. **Extension status in `about:debugging`:**
   - Is it listed?
   - Any errors shown?
   - What does "Inspect" console show?

2. **Browser Toolbox:**
   - Can you open it? (Ctrl+Shift+Alt+I)
   - Any errors in its console?
   - Any logs at all (even without [rep+] prefix)?

3. **DevTools:**
   - Does "Rep+" tab appear?
   - Does "Rep+ Test" tab appear?
   - What happens when you click them?

4. **Firefox version:**
   - Help → About Firefox
   - What version number?
