"""Root Vercel FastAPI entrypoint."""

from fastapi import FastAPI

from web.backend.app import app as api_app

app = FastAPI(title="Tashan Profile Helper")
app.mount("/api", api_app)

__all__ = ["app"]
