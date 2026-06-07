# MCRh Website

Next.js App Router site for MCRh short-let apartments and property management.

## Commands

```bash
pnpm dev
pnpm build
pnpm lint
pnpm prisma:seed
pnpm ical:sync
```

## Production Preview

`https://www.airbnbflow.com/` is used as the temporary production preview
domain while the official MCRh domain is not yet on Cloudflare.

The app image is built locally and served by Docker Swarm behind Traefik.

## Private iCal Feeds

Calendar feed URLs are private and must not be committed. Put them in:

```bash
config/ical-feeds.json
```

The file is ignored by git. The sync command reads `ICAL_FEEDS_FILE` when set,
otherwise it uses `config/ical-feeds.json`.

Expected shape:

```json
{
  "properties": {
    "chambers": [{ "label": "11.1", "url": "https://..." }]
  }
}
```

Run `pnpm ical:sync` to fetch Airbnb/VRBO iCal feeds and populate
`BlockedDate` records in Neon.
