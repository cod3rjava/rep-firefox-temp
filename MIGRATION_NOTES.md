# Firefox Migration Notes

## Summary

This Firefox extension is a port of the rep+ Chrome extension. The following changes were made to adapt it for Firefox:

## Key Changes

### 1. Manifest Conversion (V3 → V2)
- **Chrome V3**: Uses `manifest_version: 3` with service workers
- **Firefox V2**: Uses `manifest_version: 2` with persistent background scripts
- Added `browser_specific_settings` with Gecko ID
- Changed `background.service_worker` to `background.scripts` with `persistent: true`
- Updated permissions structure (Firefox uses different format)

### 2. API Namespace Updates
- All `chrome.*` API calls replaced with `browserAPI.*`
- `browserAPI` is defined as: `const browserAPI = typeof browser !== 'undefined' ? browser : chrome;`
- This provides compatibility with Firefox's `browser.*` namespace while maintaining Chrome compatibility

### 3. Background Script Migration
- **Chrome**: Service worker that can be terminated and restarted
- **Firefox**: Persistent background script that stays alive
- Removed service worker lifecycle management code (keepAlive intervals)
- Background script handles:
  - Port connections from DevTools panels
  - Local model API proxy requests
  - WebRequest listeners for multi-tab capture

### 4. Files Updated
All JavaScript files were updated to use `browserAPI` instead of `chrome`:
- `background.js` - Background script
- `devtools.js` - DevTools panel creation
- `js/network/capture.js` - Network capture
- `js/network/multi-tab.js` - Multi-tab capture
- `js/network/handler.js` - Request handling
- `js/ui/theme.js` - Theme management
- `js/features/ai/core.js` - AI features
- `js/features/extractors/*.js` - All extractor modules

### 5. URL Scheme Updates
- Added filtering for `moz-extension://` URLs (Firefox extension scheme)
- Added filtering for `about:` URLs (Firefox internal pages)
- Maintained compatibility with `chrome-extension://` for cross-browser testing

## Testing Checklist

- [ ] Load extension in Firefox Developer Edition
- [ ] Verify DevTools panel appears
- [ ] Test network request capture
- [ ] Test request replay functionality
- [ ] Test multi-tab capture (requires permissions)
- [ ] Test AI features (Claude/Gemini/Ollama)
- [ ] Test extractors (secrets/endpoints/parameters)
- [ ] Test bulk replay modes
- [ ] Test theme switching
- [ ] Test export/import functionality

## Known Differences

1. **Permissions Prompt**: Firefox may show different permission prompts
2. **Background Script**: Stays in memory (Firefox V2) vs terminated/restarted (Chrome V3)
3. **DevTools UI**: Minor visual differences may exist
4. **Performance**: Background script memory usage differs from service worker

## Next Steps

1. Test all features in Firefox
2. Fix any Firefox-specific issues
3. Test with Firefox Developer Edition and stable Firefox
4. Verify all AI providers work correctly
5. Test multi-tab capture permissions flow

## Files Not Changed

These files were copied as-is (no API dependencies):
- `panel.html` - UI structure
- CSS files - Stylesheets
- `lib/*` - Third-party libraries
- `icons/*` - Extension icons
- `rules/*` - Secret scanning rules
