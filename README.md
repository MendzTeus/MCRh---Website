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
