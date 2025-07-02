#!/bin/sh

# wait-for.sh waits for PostgreSQL to be ready before running the app

HOST="$1"
PORT="$2"
shift 2  # remove first two args (host and port)

echo "⏳ Waiting for PostgreSQL at $HOST:$PORT..."

until nc -z "$HOST" "$PORT"; do
  sleep 1
done

echo "✅ PostgreSQL is up. Starting the app..."

exec "$@"  # now just "node dist/main"
