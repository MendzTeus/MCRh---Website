import { readFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";

type MediaRouteProps = {
  params: Promise<{
    path: string[];
  }>;
};

const mediaRoot = path.resolve(
  /* turbopackIgnore: true */ process.env.MEDIA_DIR ?? "/var/www/mcrh/media",
);

const contentTypes: Record<string, string> = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
};

export const dynamic = "force-dynamic";

export async function GET(_request: Request, { params }: MediaRouteProps) {
  const { path: segments } = await params;
  const resolvedPath = path.resolve(
    /* turbopackIgnore: true */ mediaRoot,
    ...segments,
  );

  if (!resolvedPath.startsWith(`${mediaRoot}${path.sep}`)) {
    return new NextResponse("Not found", { status: 404 });
  }

  try {
    const file = await readFile(resolvedPath);
    const contentType =
      contentTypes[path.extname(resolvedPath).toLowerCase()] ??
      "application/octet-stream";

    return new NextResponse(file, {
      headers: {
        "Cache-Control": "public, max-age=31536000, immutable",
        "Content-Type": contentType,
      },
    });
  } catch {
    return new NextResponse("Not found", { status: 404 });
  }
}
