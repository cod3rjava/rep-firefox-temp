# ⚠️ CRITICAL: Where to See Console Logs

## The Problem
**Console logs from DevTools extension panels do NOT appear in the regular DevTools console!**

They appear in **Browser Toolbox**, which is a separate debugging tool.

## How to See the Logs

### Step 1: Enable Browser Toolbox
1. Type `about:config` in Firefox address bar
2. Search for: `devtools.chrome.enabled`
3. **Set it to `true`** (double-click or right-click → Toggle)

### Step 2: Open Browser Toolbox
**Keyboard shortcut:** `Ctrl+Shift+Alt+I` (Windows/Linux) or `Cmd+Opt+Shift+I` (Mac)

**OR** via menu:
- `Tools` → `Web Developer` → `Browser Toolbox`

### Step 3: Keep It Open
A new window opens - this is **Browser Toolbox**. Keep it open while testing.

### Step 4: Check the Console Tab
In Browser Toolbox, click the **Console** tab. You'll see all `[rep+]` logs here.

## Why This Happens

- **Regular DevTools Console** = Shows logs from the **web page** being debugged
- **Browser Toolbox Console** = Shows logs from **Firefox itself** and **DevTools extensions**

Your extension's panel runs in Firefox's DevTools context, so its logs go to Browser Toolbox, not the regular console.

## Quick Test

1. **Open Browser Toolbox** (Ctrl+Shift+Alt+I)
2. **Reload extension** in `about:debugging`
3. **Open DevTools** on any webpage (F12)
4. **Click "Rep+" tab**
5. **Check Browser Toolbox Console** - you should immediately see:
   ```
   ========== REP+ PANEL HTML LOADED ==========
   [rep+] BODY SCRIPT EXECUTED - Panel HTML loaded!
   ```

## If You Still Don't See Logs

If you've opened Browser Toolbox and still see nothing:

1. **Check Browser Toolbox Console for RED errors** - there might be JavaScript errors preventing scripts from loading
2. **Verify extension loaded** in `about:debugging` - check for any errors shown there
3. **Check the Console tab in Browser Toolbox** - make sure you're looking at the right tab

## Summary

✅ **DO:** Check Browser Toolbox Console (Ctrl+Shift+Alt+I)  
❌ **DON'T:** Look in regular DevTools console (F12)
