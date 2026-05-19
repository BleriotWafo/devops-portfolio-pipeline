# DevOps Portfolio Pipeline

![CI/CD Pipeline](https://github.com/bleriotwafo/devops-portfolio-pipeline/actions/workflows/ci.yml/badge.svg)
![Node.js](https://img.shields.io/badge/Node.js-20.x-brightgreen)
![Docker](https://img.shields.io/badge/Docker-Containerized-blue)
![Docker Compose](https://img.shields.io/badge/Docker%20Compose-Multi--Container-blue)
![Nginx](https://img.shields.io/badge/Nginx-Reverse%20Proxy-green)
![GHCR](https://img.shields.io/badge/GHCR-Container%20Registry-lightgrey)
![License](https://img.shields.io/badge/License-MIT-yellow)

Sprachen:  
[English](../README.md) | [Français](README.fr.md) | [Deutsch](README.de.md)

Architektur: [Architekturdiagramm ansehen](ARCHITECTURE.md)

## Projektübersicht

DevOps Portfolio Pipeline ist ein praxisorientiertes DevOps-Projekt, das zeigt, wie eine moderne Webanwendung containerisiert, getestet, veröffentlicht und bereitgestellt werden kann.

Das Projekt basiert auf einer einfachen Node.js-API. Der Schwerpunkt liegt jedoch nicht nur auf der Anwendung selbst, sondern auf dem vollständigen DevOps-Workflow. Dazu gehören Docker, Docker Compose, Nginx, automatisierte Tests, eine CI/CD-Pipeline mit GitHub Actions, die Veröffentlichung von Docker-Images in der GitHub Container Registry sowie produktionsnahe Deployment-Skripte.

Dieses Projekt ist Teil meines persönlichen Portfolios und dient dazu, meine praktischen DevOps-Kenntnisse klar, nachvollziehbar und professionell zu präsentieren.

---

## Projektziele

Die wichtigsten Ziele dieses Projekts sind:

- Entwicklung einer einfachen und stabilen Node.js-API
- Erstellung automatisierter Tests für die wichtigsten API-Endpunkte
- Containerisierung der Anwendung mit Docker
- Nutzung von Docker Compose für lokale und produktionsnahe Umgebungen
- Integration von Nginx als Reverse Proxy
- Einrichtung von Docker-Healthchecks zur Überwachung der Dienste
- Aufbau einer CI/CD-Pipeline mit GitHub Actions
- Automatische Veröffentlichung von Docker-Images in der GitHub Container Registry
- Vorbereitung eines produktionsorientierten Deployment-Workflows
- Erstellung einer klaren technischen Dokumentation für Recruiter und technische Entscheider

---

## Architektur

```txt
Entwickler
   |
   | git push
   v
GitHub Repository
   |
   v
GitHub Actions CI/CD Pipeline
   |
   | Tests ausführen
   | Docker-Image bauen
   | Docker-Image veröffentlichen
   v
GitHub Container Registry
   |
   v
Docker Compose Produktion
   |
   v
Nginx Reverse Proxy
   |
   v
Node.js API
```

---

## Verwendete Technologien

- Node.js
- Express.js
- Jest
- Supertest
- Docker
- Docker Compose
- Nginx
- GitHub Actions
- GitHub Container Registry
- PowerShell
- Bash

---

## Hauptfunktionen

- REST-API mit Node.js und Express
- Automatisierte API-Tests mit Jest und Supertest
- Containerisierte Backend-Anwendung mit Docker
- Multi-Container-Setup mit Docker Compose
- Nginx als Reverse Proxy vor der API
- `/health`-Endpunkt zur Statusprüfung der Anwendung
- Docker-Healthchecks für API und Nginx
- CI/CD-Pipeline mit GitHub Actions
- Automatische Veröffentlichung des Docker-Images in der GitHub Container Registry
- Separate Docker-Compose-Konfiguration für die Produktion
- Deployment-Skripte für Windows und Linux
- Verwaltung von Umgebungsvariablen mit `.env.example`

---

## API-Endpunkte

### GET `/`

Gibt grundlegende Informationen über die API zurück.

Beispielantwort:

```json
{
  "message": "DevOps Portfolio Pipeline API",
  "status": "running",
  "author": "Bleriot Wafo"
}
```

### GET `/health`

Gibt den Gesundheitsstatus der Anwendung zurück.

Beispielantwort:

```json
{
  "status": "healthy",
  "uptime": 123.45
}
```

---

## Projektstruktur

```txt
devops-portfolio-pipeline/
├── .github/
│   └── workflows/
│       └── ci.yml
├── docs/
│   ├── README.fr.md
│   └── README.de.md
├── nginx/
│   └── default.conf
├── scripts/
│   ├── deploy-prod.ps1
│   └── deploy-prod.sh
├── src/
│   ├── app.js
│   └── server.js
├── tests/
│   └── app.test.js
├── .dockerignore
├── .env.example
├── .gitignore
├── Dockerfile
├── docker-compose.yml
├── docker-compose.prod.yml
├── package.json
├── package-lock.json
└── README.md
```

---

## Lokale Installation

Repository klonen:

```bash
git clone https://github.com/bleriotwafo/devops-portfolio-pipeline.git
cd devops-portfolio-pipeline
```

Abhängigkeiten installieren:

```bash
npm install
```

Anwendung im Entwicklungsmodus starten:

```bash
npm run dev
```

Die API ist anschließend unter folgender Adresse erreichbar:

```txt
http://localhost:3000
```

---

## Umgebungsvariablen

Erstelle eine lokale `.env`-Datei auf Basis der Datei `.env.example`.

Beispiel:

```env
NODE_ENV=production
PORT=3000
APP_NAME=DevOps Portfolio Pipeline API
```

Die `.env`-Datei wird von Git ignoriert und darf nicht auf GitHub veröffentlicht werden.

---

## Tests ausführen

Automatisierte Tests starten:

```bash
npm test
```

Die Tests prüfen, ob die Haupt-Route der API und der Healthcheck-Endpunkt korrekt antworten.

---

## Nutzung mit Docker

Docker-Image bauen:

```bash
npm run docker:build
```

Lokale Docker-Compose-Umgebung starten:

```bash
npm run compose:up
```

Umgebung im Hintergrund starten:

```bash
npm run compose:up:detached
```

Laufende Container anzeigen:

```bash
npm run compose:ps
```

Logs anzeigen:

```bash
npm run compose:logs
```

Umgebung stoppen:

```bash
npm run compose:down
```

Wenn die Anwendung mit Docker Compose läuft, ist sie über Nginx unter folgender Adresse erreichbar:

```txt
http://localhost:8080
```

---

## Produktionsmodus

Die Produktionskonfiguration verwendet das Docker-Image, das in der GitHub Container Registry veröffentlicht wurde.

Produktionsmodus starten:

```bash
npm run prod:up
```

Produktionscontainer anzeigen:

```bash
npm run prod:ps
```

Produktionslogs anzeigen:

```bash
npm run prod:logs
```

Produktionsmodus stoppen:

```bash
npm run prod:down
```

Die produktionsnahe Docker-Compose-Datei verwendet ein Image in dieser Form:

```txt
ghcr.io/bleriotwafo/devops-portfolio-api:latest
```

---

## Deployment

Für Windows steht ein PowerShell-Deployment-Skript zur Verfügung:

```bash
npm run deploy:prod
```

Das Deployment-Skript führt folgende Schritte aus:

```txt
1. Bestehende Produktionscontainer stoppen
2. Das neueste Docker-Image aus der GitHub Container Registry herunterladen
3. Die Produktionsumgebung neu starten
4. Den Status der Container anzeigen
```

Für Linux-Server steht zusätzlich ein Bash-Skript zur Verfügung:

```bash
bash scripts/deploy-prod.sh
```

---

## CI/CD-Pipeline

Das Projekt nutzt GitHub Actions zur Automatisierung des DevOps-Workflows.

Die Pipeline führt folgende Schritte aus:

```txt
1. Repository auschecken
2. Node.js-Abhängigkeiten installieren
3. Automatisierte Tests ausführen
4. Docker-Image bauen
5. Docker-Image in der GitHub Container Registry veröffentlichen
```

Die CI/CD-Pipeline stellt sicher, dass die Anwendung nach jeder Änderung auf dem Hauptbranch automatisch getestet, containerisiert und als Docker-Image veröffentlicht wird.

---

## Healthchecks

Das Projekt enthält Healthchecks für die Node.js-API und den Nginx Reverse Proxy.

Der Healthcheck-Endpunkt der API lautet:

```txt
http://localhost:3000/health
```

Über Nginx ist der Healthcheck unter folgender Adresse erreichbar:

```txt
http://localhost:8080/health
```

Damit wird geprüft, ob die Container nicht nur gestartet sind, sondern auch korrekt antworten.

---

## Nachgewiesene DevOps-Kompetenzen

Dieses Projekt zeigt folgende DevOps-Kompetenzen:

- Containerisierung mit Docker
- Multi-Container-Orchestrierung mit Docker Compose
- Konfiguration eines Reverse Proxy mit Nginx
- Aufbau einer CI/CD-Pipeline mit GitHub Actions
- Automatisierte Tests vor der Veröffentlichung eines Docker-Images
- Veröffentlichung von Docker-Images in einer Container Registry
- Produktionsorientierter Deployment-Workflow
- Verwaltung von Umgebungsvariablen
- Service-Überwachung mit Docker-Healthchecks
- Deployment-Skripte mit PowerShell und Bash
- Grundlegende Best Practices für produktionsnahe Anwendungen

---

## Verwendung im Portfolio

Dieses Repository ist Teil meines persönlichen DevOps-Portfolios.

Es zeigt praktische Kenntnisse in Docker-Containerisierung, Orchestrierung mit Docker Compose, Konfiguration eines Nginx Reverse Proxy, CI/CD-Automatisierung mit GitHub Actions, Veröffentlichung von Docker-Images in einer Container Registry und produktionsnahen Deployment-Workflows.

Eine ausführlichere Projektpräsentation wird später auf meiner persönlichen Portfolio-Webseite verfügbar sein.

## Autor

**Bleriot Wafo**

Dieses Projekt wurde als Teil meines DevOps-Portfolios erstellt, um praktische Kenntnisse in Automatisierung, Containerisierung, CI/CD und Deployment-Workflows zu demonstrieren.