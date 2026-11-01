#!/usr/bin/env python3
"""Static file server for Bluetooth Era (same idea as yoyoera/server.py)."""

from __future__ import annotations

from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

ROOT = Path(__file__).resolve().parent
HOST = "0.0.0.0"
PORT = 5173


class Handler(SimpleHTTPRequestHandler):
    extensions_map = {
        **SimpleHTTPRequestHandler.extensions_map,
        ".webmanifest": "application/manifest+json",
        ".js": "text/javascript; charset=utf-8",
        ".mjs": "text/javascript; charset=utf-8",
        ".svg": "image/svg+xml",
        ".json": "application/json",
    }

    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def do_GET(self) -> None:
        # YouTube embeds fail on 127.0.0.1 — send users to localhost
        host = (self.headers.get("Host") or "").split(":")[0]
        if host == "127.0.0.1":
            target = f"http://localhost:{PORT}{self.path}"
            self.send_response(302)
            self.send_header("Location", target)
            self.end_headers()
            return
        super().do_GET()


def main() -> None:
    server = ThreadingHTTPServer((HOST, PORT), Handler)
    print(f"Bluetooth Era → http://localhost:{PORT}")
    print("Important: use localhost (not 127.0.0.1) so YouTube songs can play.")
    print("Open that URL, hard refresh, then tap Play.")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nStopped.")
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
