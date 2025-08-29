Lustrous Bazaar
================

Static showcase site for handcrafted metal, copper art, silver jewelry and leather goods.

Structure
---------
index.html
assets/
  css/
    tokens.css (Design tokens / base styles)
    styles.css (Component & layout styles)
    js/
      main.js (Navigation + carousel + reflections)
      img/ (Images)
data/ (Currently unused; JSON fetching removed)

Local Preview
-------------
You can just open index.html in a browser, or serve it (optional) for correct relative path behavior.

Mac / Linux:
python3 -m http.server 8080

Then open: http://localhost:8080

Deploy to GitHub Pages
----------------------
1. Create repo (choose ONE approach):
   - Project Site (recommended): lustrous-bazaar
   - Or User Site (yourusername.github.io) if you want it at root domain.
2. Initialize locally:
   git init
   git add .
   git commit -m "Initial commit"
3. Add remote:
   git remote add origin https://github.com/YOUR_USERNAME/lustrous-bazaar.git
4. Push:
   git branch -M main
   git push -u origin main
5. In GitHub repo Settings > Pages:
   - Source: Deploy from a branch
   - Branch: main / (root)
6. After it builds, site will be at:
   https://YOUR_USERNAME.github.io/lustrous-bazaar/

Remember to replace YOUR_USERNAME in meta tags in index.html.

Optional Hardening
------------------
Add a robots.txt or sitemap.xml later if needed.

License
-------
Proprietary. All rights reserved unless you choose a license.