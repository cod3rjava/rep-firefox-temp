# rep+ for Firefox

Firefox port of the rep+ Chrome extension - A lightweight Firefox DevTools extension inspired by Burp Suite's Repeater, now supercharged with AI.

## Status

🚧 **Work in Progress** - This is a Firefox port of the rep+ Chrome extension. Currently in development.

## Features

See the [original Chrome extension README](../rep-chrome/README.md) for full feature list. This Firefox port aims to provide the same functionality.

## Installation

### Development Installation

1. **Clone or download this repository**
2. **Open Firefox** and navigate to `about:debugging`
3. **Click "This Firefox"** in the left sidebar
4. **Click "Load Temporary Add-on"**
5. **Select the `manifest.json` file** from the `rep-firefox` directory

The extension will be loaded temporarily (it will be removed when you restart Firefox).

## Differences from Chrome Version

- **Manifest V2**: Firefox uses Manifest V2 (Chrome uses V3)
- **Background Script**: Persistent background script instead of service worker
- **Browser API**: Uses `browser.*` namespace (Firefox WebExtension standard)
- **Permissions**: Slightly different permission structure

## Development

### Project Structure

```
rep-firefox/
├── manifest.json          # Firefox Manifest V2
├── background.js          # Persistent background script
├── devtools.html          # DevTools page
├── devtools.js           # DevTools panel creation
├── panel.html            # Main panel UI
├── js/                   # JavaScript modules
│   ├── main.js          # Main entry point
│   ├── network/         # Network capture & handling
│   ├── ui/              # UI components
│   ├── features/        # Feature modules (AI, extractors, etc.)
│   └── core/            # Core utilities
├── css/                  # Stylesheets
├── lib/                  # Third-party libraries
├── icons/                # Extension icons
└── rules/                # Secret scanning rules
```

### Key Migration Changes

1. **API Namespace**: All `chrome.*` calls replaced with `browserAPI.*` which uses `browser.*` in Firefox and falls back to `chrome.*` for compatibility
2. **Background Script**: Converted from service worker (Chrome V3) to persistent background script (Firefox V2)
3. **Manifest**: Converted from V3 to V2 format with Firefox-specific settings

## Building

Currently no build process required - the extension runs directly from source files.

## Testing

1. Load the extension in Firefox using the development installation steps above
2. Open DevTools (F12)
3. Look for the "Rep+" tab in DevTools
4. Test network capture and request replay functionality

## Known Issues

- Some features may still need testing and refinement
- AI features need to be tested with Firefox's security model
- Multi-tab capture permissions may need adjustment

## Contributing

This is a port of the original Chrome extension. For issues specific to the Firefox version, please file issues in this repository. For general rep+ features, refer to the original [Chrome extension repository](https://github.com/bscript/rep).

## License

Same license as the original rep+ Chrome extension.
