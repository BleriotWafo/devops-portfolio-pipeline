#!/bin/bash

set -e

echo "Starting production deployment..."

echo "Stopping existing containers..."
docker compose -f docker-compose.prod.yml down

echo "Pulling latest images..."
docker compose -f docker-compose.prod.yml pull

echo "Starting production containers..."
docker compose -f docker-compose.prod.yml up -d

echo "Deployment status:"
docker compose -f docker-compose.prod.yml ps

echo "Production deployment completed."
echo "Application available at: http://localhost:8080"