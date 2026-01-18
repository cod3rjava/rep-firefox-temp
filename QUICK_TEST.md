# Quick Test Instructions

## Step-by-Step Testing

### 1. Check Browser Toolbox Console
**CRITICAL:** Console logs from DevTools panels appear in **Browser Toolbox**, NOT the regular DevTools console!

1. Enable Browser Toolbox:
   - Open `about:config` in Firefox
   - Search for `devtools.chrome.enabled`
   - Set it to `true` (double-click)
   - Close `about:config`

2. Open Browser Toolbox:
   - Press **Ctrl+Shift+Alt+I** (Windows/Linux) or **Cmd+Opt+Shift+I** (Mac)
   - OR: `Tools > Web Developer > Browser Toolbox`
   - A new window opens - this is where you'll see `[rep+]` logs

3. Keep Browser Toolbox open while testing

### 2. Reload Extension
1. Go to `about:debugging#/runtime/this-firefox`
2. Find "rep+" extension
3. Click **"Reload"** button

### 3. Test Sequence
1. **Open Browser Toolbox FIRST** (Ctrl+Shift+Alt+I)
2. **Open a regular tab** and navigate to any website (e.g., `https://example.com`)
3. **Open DevTools** on that tab (F12)
4. **Click "Network" tab** - THIS IS REQUIRED! Firefox needs Network panel activated
5. **Refresh the page** (F5) - you should see requests in Network tab
6. **Click "Rep+" tab** in DevTools
7. **Check Browser Toolbox Console** - you should now see logs starting with `[rep+]`

### 4. What You Should See

In Browser Toolbox Console, you should see:
```
[rep+] ===== DevTools script (devtools.js) LOADED =====
[rep+] panel.html script executed!
[rep+] panel.html: Scripts section reached
[rep+] test-simple.js LOADED
[rep+] Network API is available!
[rep+] SIMPLE TEST: Listener added successfully
[rep+] SIMPLE TEST: Request captured! https://...
```

### 5. If You See Nothing

1. **Verify Browser Toolbox is open** - logs won't appear in regular DevTools console
2. **Check if Network panel was opened** - this is REQUIRED for Firefox
3. **Check for JavaScript errors** in Browser Toolbox Console (red errors)
4. **Try refreshing the extension** again in `about:debugging`

### 6. Test with Simple Page

Try on a simple page first:
1. Navigate to `https://example.com`
2. Follow steps above
3. In Browser Toolbox Console, you should see:
   ```
   [rep+] SIMPLE TEST: Request captured! https://example.com/
   ```

## Troubleshooting

### No logs at all in Browser Toolbox
- Check `devtools.chrome.enabled` is `true` in `about:config`
- Try restarting Firefox
- Check extension loaded in `about:debugging`

### Network API not available
- **Make sure you opened Network panel first!** This is Firefox requirement
- Refresh the page after opening Network panel
- Then switch to Rep+ panel

### Scripts not loading
- Check Browser Toolbox Console for errors
- Verify file paths are correct
- Check if extension loaded without errors in `about:debugging`
