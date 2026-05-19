# DevOps Portfolio Pipeline

Langues :  
[English](../README.md) | [Français](README.fr.md) | [Deutsch](README.de.md)

Architecture : [Voir le schéma d’architecture](ARCHITECTURE.md)

## Présentation du projet

DevOps Portfolio Pipeline est un projet pratique conçu pour démontrer comment une application web moderne peut être conteneurisée, testée, publiée et déployée avec des outils DevOps professionnels.

Le projet repose sur une API simple développée avec Node.js, mais l’objectif principal n’est pas seulement l’application elle-même. Le but est de présenter un workflow DevOps complet avec Docker, Docker Compose, Nginx, des tests automatisés, une pipeline CI/CD avec GitHub Actions, la publication d’images Docker dans GitHub Container Registry et des scripts de déploiement orientés production.

Ce projet fait partie de mon portfolio personnel et sert à démontrer mes compétences DevOps de manière concrète, claire et professionnelle.

---

## Objectifs du projet

Les objectifs principaux de ce projet sont :

- développer une API Node.js simple et fiable ;
- ajouter des tests automatisés pour les routes principales ;
- conteneuriser l’application avec Docker ;
- utiliser Docker Compose pour les environnements local et production ;
- intégrer Nginx comme reverse proxy ;
- ajouter des healthchecks Docker pour surveiller les services ;
- créer une pipeline CI/CD avec GitHub Actions ;
- publier automatiquement les images Docker dans GitHub Container Registry ;
- préparer un workflow de déploiement orienté production ;
- documenter le projet de manière claire pour les recruteurs et les profils techniques.

---

## Architecture

```txt
Développeur
   |
   | git push
   v
Repository GitHub
   |
   v
Pipeline CI/CD GitHub Actions
   |
   | Exécution des tests
   | Construction de l’image Docker
   | Publication de l’image Docker
   v
GitHub Container Registry
   |
   v
Docker Compose Production
   |
   v
Reverse Proxy Nginx
   |
   v
API Node.js
```

---

## Technologies utilisées

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

## Fonctionnalités principales

- API REST développée avec Node.js et Express
- Tests automatisés avec Jest et Supertest
- Application backend conteneurisée avec Docker
- Configuration multi-conteneurs avec Docker Compose
- Reverse proxy Nginx devant l’API
- Endpoint `/health` pour vérifier l’état de l’application
- Healthchecks Docker pour l’API et Nginx
- Pipeline CI/CD avec GitHub Actions
- Publication automatique de l’image Docker vers GitHub Container Registry
- Configuration Docker Compose séparée pour la production
- Scripts de déploiement pour Windows et Linux
- Gestion des variables d’environnement avec `.env.example`

---

## Endpoints de l’API

### GET `/`

Retourne les informations principales de l’API.

Exemple de réponse :

```json
{
  "message": "DevOps Portfolio Pipeline API",
  "status": "running",
  "author": "Bleriot Wafo"
}
```

### GET `/health`

Retourne l’état de santé de l’application.

Exemple de réponse :

```json
{
  "status": "healthy",
  "uptime": 123.45
}
```

---

## Structure du projet

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

## Installation locale

Cloner le repository :

```bash
git clone https://github.com/bleriotwafo/devops-portfolio-pipeline.git
cd devops-portfolio-pipeline
```

Installer les dépendances :

```bash
npm install
```

Lancer l’application en mode développement :

```bash
npm run dev
```

L’API sera disponible à l’adresse suivante :

```txt
http://localhost:3000
```

---

## Variables d’environnement

Créer un fichier local `.env` à partir du fichier `.env.example`.

Exemple :

```env
NODE_ENV=production
PORT=3000
APP_NAME=DevOps Portfolio Pipeline API
```

Le fichier `.env` est ignoré par Git et ne doit pas être envoyé sur GitHub.

---

## Lancer les tests

Pour exécuter les tests automatisés :

```bash
npm test
```

Les tests vérifient que la route principale de l’API et l’endpoint de healthcheck répondent correctement.

---

## Utilisation avec Docker

Construire l’image Docker :

```bash
npm run docker:build
```

Lancer l’environnement local avec Docker Compose :

```bash
npm run compose:up
```

Lancer l’environnement en arrière-plan :

```bash
npm run compose:up:detached
```

Afficher les conteneurs en cours d’exécution :

```bash
npm run compose:ps
```

Afficher les logs :

```bash
npm run compose:logs
```

Arrêter l’environnement :

```bash
npm run compose:down
```

Lorsque l’application tourne avec Docker Compose, elle est accessible via Nginx à l’adresse suivante :

```txt
http://localhost:8080
```

---

## Mode production

La configuration production utilise l’image Docker publiée dans GitHub Container Registry.

Lancer le mode production :

```bash
npm run prod:up
```

Afficher les conteneurs de production :

```bash
npm run prod:ps
```

Afficher les logs de production :

```bash
npm run prod:logs
```

Arrêter le mode production :

```bash
npm run prod:down
```

Le fichier Docker Compose de production utilise une image de ce type :

```txt
ghcr.io/bleriotwafo/devops-portfolio-api:latest
```

---

## Déploiement

Un script de déploiement PowerShell est disponible pour Windows :

```bash
npm run deploy:prod
```

Le script de déploiement effectue les actions suivantes :

```txt
1. Arrêter les conteneurs de production existants
2. Télécharger la dernière image Docker depuis GitHub Container Registry
3. Relancer l’environnement de production
4. Afficher l’état des conteneurs
```

Un script Bash est également disponible pour les serveurs Linux :

```bash
bash scripts/deploy-prod.sh
```

---

## Pipeline CI/CD

Le projet utilise GitHub Actions pour automatiser le workflow DevOps.

La pipeline effectue les étapes suivantes :

```txt
1. Récupération du repository
2. Installation des dépendances Node.js
3. Exécution des tests automatisés
4. Construction de l’image Docker
5. Publication de l’image Docker dans GitHub Container Registry
```

Cette pipeline permet de vérifier automatiquement l’application et de publier une nouvelle image Docker après chaque modification envoyée sur la branche principale.

---

## Healthchecks

Le projet inclut des healthchecks pour l’API Node.js et pour le reverse proxy Nginx.

L’endpoint de healthcheck de l’API est :

```txt
http://localhost:3000/health
```

À travers Nginx, le healthcheck est disponible ici :

```txt
http://localhost:8080/health
```

Cela permet de vérifier que les conteneurs ne sont pas seulement démarrés, mais qu’ils répondent réellement correctement.

---

## Compétences DevOps démontrées

Ce projet démontre les compétences DevOps suivantes :

- conteneurisation avec Docker ;
- orchestration multi-conteneurs avec Docker Compose ;
- configuration d’un reverse proxy avec Nginx ;
- création d’une pipeline CI/CD avec GitHub Actions ;
- exécution de tests automatisés avant la publication d’une image ;
- publication d’images Docker dans un registre de conteneurs ;
- workflow de déploiement orienté production ;
- gestion des variables d’environnement ;
- surveillance de services avec Docker healthchecks ;
- scripts de déploiement avec PowerShell et Bash ;
- bonnes pratiques de base pour préparer une application à la production.

---

## Auteur

**Bleriot Wafo**

Ce projet a été créé dans le cadre de mon portfolio DevOps afin de démontrer mes compétences pratiques en automatisation, conteneurisation, CI/CD et déploiement.