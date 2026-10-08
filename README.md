# Everprime (Pvt) Ltd — Website

React + Vite + React Router. Pages: Home, About, Services, Staffing, Events, Contact, 404.

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
```

## Production build
```bash
npm run build
npm run preview
```

## Edit content
- Company/CEO/contact details: `src/config.js`
- Services, FAQs, values, stats: `src/data.js`
- Images: `public/images/` (logo and CEO photo already included)

## Photography
The locally bundled page photography is sourced from Unsplash and is stock photography, not AI-generated. Source images:
- Home event: [Unsplash](https://images.unsplash.com/photo-1540575467063-178a50c2df87)
- About team: [Unsplash](https://images.unsplash.com/photo-1521737711867-e3b97375f902)
- Services team: [Unsplash](https://images.unsplash.com/photo-1556761175-b413da4baf72)
- Staffing: [Unsplash](https://images.unsplash.com/photo-1581091226825-a6a2a5aee158)
- Event venue: [Unsplash](https://images.unsplash.com/photo-1511578314322-379afb476865)
- Contact office: [Unsplash](https://images.unsplash.com/photo-1497366754035-f200968a6e72)

## Deploy to Vercel + everprime.lk
1. Push this folder to a GitHub repo.
2. Vercel → Add New Project → import the repo (Framework: Vite is auto-detected).
3. Deploy. `vercel.json` already handles page routing.
4. Project → Settings → Domains → add `everprime.lk` and `www.everprime.lk`.
5. At your .lk registrar, set the DNS records Vercel shows
   (usually A `76.76.21.21` for the root and CNAME `cname.vercel-dns.com` for `www`).
