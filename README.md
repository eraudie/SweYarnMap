# SweYarnMap

A directory of Swedish yarn producers — browse by grid or map, filter by region and fiber type, and sort by name.

Built with React + TypeScript + Vite. No backend, no login — just a static site driven by a single JSON file.

---

## Features

- **Grid view** — producer cards with name, location, fiber types, and ordering info
- **Map view** — OpenStreetMap with color-coded markers (pink = webshop, orange = other ordering)
- **Search & filter** — by name/description/location, region, and fiber type
- **Sort** — A–Z or Z–A by name
- **20+ producers** included out of the box

## Adding or editing producers

All data lives in [`src/data/producers.json`](src/data/producers.json). Each producer has the following fields:

| Field | Type | Description |
|---|---|---|
| `id` | number | Unique identifier |
| `name` | string | Producer name |
| `location` | string | City or village |
| `region` | string | Swedish region/landskap |
| `website` | string | URL |
| `description` | string | Short description |
| `fiberTypes` | string[] | e.g. `["Wool", "Alpaca"]` |
| `image` | string \| null | URL or `/images/filename.jpg` |
| `lat` / `lng` | number | Coordinates for the map |
| `orderType` | `"webshop"` \| `"other"` \| null | How to order |
| `orderDetails` | string \| null | Extra ordering info |

Drop images into `public/images/` and reference them as `"/images/filename.jpg"`.

## Development

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build → dist/
```

## Deployment

The project is configured for **Netlify** via [`netlify.toml`](netlify.toml).  
Connect the GitHub repository at [app.netlify.com](https://app.netlify.com) — build settings are auto-detected.

## Tech stack

- [Vite](https://vitejs.dev) + [React 18](https://react.dev) + TypeScript
- [React Leaflet](https://react-leaflet.js.org) / [OpenStreetMap](https://www.openstreetmap.org)
- Plain CSS with custom properties (no CSS framework)
- Google Fonts: Playfair Display + Nunito


