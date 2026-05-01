# Quick Deployment Checklist

## Essential Files (Deploy these first)

- [ ] Copy `robots.txt` to `/Users/prkr/Health/meal_prep/robots.txt`
- [ ] Copy `_headers` to `/Users/prkr/Health/meal_prep/_headers`
- [ ] Add meta tags from `meta-tags-snippet.html` to all HTML files in `<head>` section
- [ ] Commit and push changes
- [ ] Wait 2-3 minutes for Cloudflare Pages to deploy

## Verification (After deployment)

- [ ] Visit https://nutrition-meal-plan.pages.dev/robots.txt
      Should show "Disallow: /"
      
- [ ] Open site in browser, check DevTools > Network > Headers
      Should see X-Robots-Tag, X-Frame-Options, etc.
      
- [ ] View page source, check <head> section
      Should see noindex meta tags

## Optional: Add Password Protection

Choose ONE:

### Option 1: Cloudflare Access (Recommended)
- [ ] Zero Trust > Access > Applications > Add application
- [ ] Self-hosted application
- [ ] Add your email to allow list
- [ ] Apply to nutrition-meal-plan.pages.dev

### Option 2: Basic Auth Worker
- [ ] Edit `basic-auth-worker.js` with strong password
- [ ] Create new Worker in Cloudflare dashboard
- [ ] Paste worker code
- [ ] Add route: nutrition-meal-plan.pages.dev/*
- [ ] Deploy

## After 1 Week

- [ ] Search Google for: site:nutrition-meal-plan.pages.dev
- [ ] If results appear, request removal via Google Search Console

## Files Location

All security files are in: /home/claude/
- robots.txt
- _headers  
- meta-tags-snippet.html
- SECURITY_GUIDE.md (full instructions)
- basic-auth-worker.js (optional)
- DEPLOYMENT_CHECKLIST.md (this file)
