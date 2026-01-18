# How to Debug Firefox DevTools Extension Console Logs

## The Problem
Console logs from DevTools panels appear in a **different console** than you might expect!

## Where to See Console Logs

### Option 1: Browser Toolbox (RECOMMENDED) ⭐
This shows all console logs from the DevTools extension panel.

1. Open Firefox
2. Press **Ctrl+Shift+Alt+I** (or **Cmd+Opt+Shift+I** on Mac) to open Browser Toolbox
   - If it doesn't open, go to: `about:config` and set `devtools.chrome.enabled` to `true`
   - Then go to: `Tools > Web Developer > Browser Toolbox`
3. In Browser Toolbox, go to the **Console** tab
4. Now you'll see all `console.log` messages from your Rep+ panel

### Option 2: Inspect DevTools Panel
1. Open DevTools (F12) with Rep+ panel open
2. Right-click on the Rep+ panel content area
3. Select "Inspect Element"
4. A new DevTools window opens - use its Console tab

### Option 3: Background Script Console
1. Go to `about:debugging#/runtime/this-firefox`
2. Find your extension
3. Click **"Inspect"** button
4. This shows console for background script (not panel)

## What You Should See

When the extension loads correctly, you should see in Browser Toolbox Console:

```
[rep+] panel.html script executed!
[rep+] capture.js SCRIPT LOADED!
[rep+] main.js SCRIPT LOADED!
[rep+] Panel DOMContentLoaded - initializing...
[rep+] Setting up network listener from main.js...
[rep+] ========== setupNetworkListener called ==========
```

## Testing Steps

1. **Open Browser Toolbox FIRST** (Ctrl+Shift+Alt+I)
2. **Reload extension** in `about:debugging`
3. **Close and reopen DevTools** (F12)
4. **Open Network panel** (click Network tab - REQUIRED!)
5. **Switch to Rep+ panel**
6. **Refresh the page** (F5)
7. **Check Browser Toolbox Console** for logs

## If You Still See Nothing

1. Check Browser Toolbox Console (not regular console)
2. Verify extension loaded in `about:debugging`
3. Check for JavaScript errors in Browser Toolbox
4. Make sure `devtools.chrome.enabled` is `true` in `about:config`

## Quick Test

Add this to `panel.html` right after `<body>` tag:

```html
<script>
  alert('Panel loaded!'); // You'll see this immediately
</script>
```

If you don't see the alert, the panel isn't loading at all.
