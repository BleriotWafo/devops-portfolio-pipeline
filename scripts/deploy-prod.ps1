Write-Host "Starting production deployment..." -ForegroundColor Cyan

Write-Host "Stopping existing containers..." -ForegroundColor Yellow
docker compose -f docker-compose.prod.yml down

Write-Host "Pulling latest images..." -ForegroundColor Yellow
docker compose -f docker-compose.prod.yml pull

Write-Host "Starting production containers..." -ForegroundColor Yellow
docker compose -f docker-compose.prod.yml up -d

Write-Host "Deployment status:" -ForegroundColor Cyan
docker compose -f docker-compose.prod.yml ps

Write-Host "Production deployment completed." -ForegroundColor Green
Write-Host "Application available at: http://localhost:8080" -ForegroundColor Green