#!/bin/bash

set -e

echo "Starting backend..."

cd backend
pip install -r requirements.txt
uvicorn main:app --reload --port 8000 &
BACKEND_PID=$!

echo "Starting frontend..."

cd ../frontend
npm install
npm run dev &
FRONTEND_PID=$!

trap "kill $BACKEND_PID $FRONTEND_PID" EXIT

wait