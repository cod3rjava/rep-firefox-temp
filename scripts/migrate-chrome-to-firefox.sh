#!/bin/bash
# Script to migrate Chrome extension files to Firefox
# Replaces chrome.* API calls with browser.* namespace

SOURCE_DIR="$1"
TARGET_DIR="$2"

if [ -z "$SOURCE_DIR" ] || [ -z "$TARGET_DIR" ]; then
    echo "Usage: $0 <source_directory> <target_directory>"
    exit 1
fi

echo "Migrating Chrome extension files to Firefox..."

# Find all JavaScript files and replace chrome.* with browser.*
find "$SOURCE_DIR" -name "*.js" -type f | while read -r file; do
    # Get relative path
    rel_path="${file#$SOURCE_DIR/}"
    target_file="$TARGET_DIR/$rel_path"
    
    # Create target directory if it doesn't exist
    mkdir -p "$(dirname "$target_file")"
    
    # Copy file and perform replacements
    sed -e 's/chrome\.devtools\./browserAPI.devtools./g' \
        -e 's/chrome\.runtime\./browserAPI.runtime./g' \
        -e 's/chrome\.storage\./browserAPI.storage./g' \
        -e 's/chrome\.webRequest\./browserAPI.webRequest./g' \
        -e 's/chrome\.permissions\./browserAPI.permissions./g' \
        -e 's/\bchrome\b/browserAPI/g' \
        -e 's/const browserAPI/const browserAPI = typeof browser !== '\''undefined'\'' ? browser : chrome;/' \
        "$file" > "$target_file"
    
    echo "Migrated: $rel_path"
done

echo "Migration complete!"
