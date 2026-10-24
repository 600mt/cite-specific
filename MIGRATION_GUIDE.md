# Map Notes Migration Guide

## What Changed?

Your map notes app has been upgraded from Supabase (which pauses/stops on free tier) to **persistent storage** that:
- ✅ Is always available (no pausing or stopping)
- ✅ Persists data permanently across sessions
- ✅ Is completely free
- ✅ Works offline

## Files Included

1. **map-notes.html** - Your updated map app with persistent storage
2. **migration-tool.html** - Tool to import your 2,718 Supabase notes
3. **notes_data.tsv** - Your extracted notes data ready to import

## How to Migrate Your Notes

### Step 1: Open the Migration Tool
1. Open `migration-tool.html` in your browser (as an artifact in Claude)
2. You'll see a simple interface for importing notes

### Step 2: Import Your Data
1. Open `notes_data.tsv` in a text editor
2. Copy ALL the content (Ctrl+A, Ctrl+C)
3. Paste it into the textarea in the migration tool
4. Click "Parse & Preview" to verify the data
5. Click "Import Notes" to save them to persistent storage

The import will take a few minutes for all 2,718 notes. You'll see a progress bar.

### Step 3: Use Your New Map
1. Open `map-notes.html`
2. All your imported notes will appear automatically!
3. You can continue adding new notes as before

## Features Preserved

All your original features still work:
- 📍 Drop notes at your current location
- 🎨 Text formatting (bold, italic, underline)
- 🎨 Font sizes (small, normal, large)
- 🎨 Colors (red, green, blue, purple)
- 📱 Mobile-friendly interface
- 🗺️ Zoom-responsive text sizing

## Technical Details

### Storage Method
- Uses `window.storage` API (persistent storage for artifacts)
- Notes are stored with keys like `note:TIMESTAMP_ID`
- Data format: `{lat, lon, text, created_at}`

### Data Format (TSV)
Your notes are stored in tab-separated format:
```
ID [TAB] LATITUDE [TAB] LONGITUDE [TAB] TEXT [TAB] CREATED_AT
```

## Notes Statistics

From your Supabase backup:
- **Total Notes:** 2,718
- **Date Range:** April 22 - April 27, 2025
- **Locations:** Netherlands (Rotterdam area, Zeeland)
- **Formatted Notes:** Many with HTML formatting (bold, italic, colors)

## Troubleshooting

### Notes not showing up?
1. Make sure you completed the import in migration-tool.html
2. Refresh the map-notes.html page
3. Check browser console for errors (F12)

### Import failed?
1. Make sure you're pasting the raw TSV data
2. The format should be: ID[TAB]LAT[TAB]LON[TAB]TEXT[TAB]DATE
3. Try importing in smaller batches if needed

### Want to start fresh?
1. Open migration-tool.html
2. Click "Clear All Notes" to delete everything
3. Re-import if needed

## Future Deployment

To deploy this online:

### Option 1: Netlify (Your Current Host)
1. Replace your current `index.html` with `map-notes.html`
2. Deploy to Netlify as before
3. Notes will persist per user/browser

### Option 2: GitHub Pages
1. Create a GitHub repository
2. Upload `map-notes.html` as `index.html`
3. Enable GitHub Pages in settings

### Option 3: Any Static Host
Works on: Vercel, Cloudflare Pages, AWS S3, etc.
Just upload the HTML file!

## Benefits Over Supabase

| Feature | Supabase Free | Persistent Storage |
|---------|--------------|-------------------|
| Always Available | ❌ Pauses | ✅ Yes |
| Data Persistence | ⚠️ Can be deleted | ✅ Permanent |
| Setup Required | ✅ Account needed | ❌ None |
| Cost | Free (limited) | ✅ Free |
| Database Backup | ⚠️ Manual | ✅ Automatic |

## Your Travel Notes

I noticed your notes are from a bike trip through the Netherlands! Some highlights I saw:
- Studio visits in Rotterdam area
- Cycling along dikes (Zeeland)
- Fish dinners
- Wind turbines
- Lots of seagulls 😄

Your notes capture a wonderful journey with friends. The new system will keep them safe and always accessible for future trips!

---

**Need Help?** Feel free to ask if you have any questions about the migration or using the new system!
