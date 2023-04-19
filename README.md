[![Build & Tests](https://github.com/alexandrelamberty/hortus-web-app/actions/workflows/node.yml/badge.svg)](https://github.com/alexandrelamberty/hortus-web-app/actions/workflows/node.yml)
[![Docker](https://github.com/alexandrelamberty/hortus-web-app/actions/workflows/docker.yml/badge.svg)](https://github.com/alexandrelamberty/hortus-web-app/actions/workflows/docker.yml)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/8c20ea4c237d44a9ad8621be6cd43cd4)](https://www.codacy.com/gh/alexandrelamberty/hortus-web-app/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=alexandrelamberty/hortus-web-app&amp;utm_campaign=Badge_Grade)
[![codecov](https://codecov.io/gh/alexandrelamberty/hortus-web-app/branch/master/graph/badge.svg?token=268D2KMTW6)](https://codecov.io/gh/alexandrelamberty/hortus-web-app)
[![DockerHub](https://img.shields.io/badge/DockerHub-images-important.svg?logo=Docker)](https://hub.docker.com/r/alexandrelamberty/hortus-web-app)

# Hortus Web Application

Gardening planner web application part of the [Hortus](https://github.com/alexandrelamberty/hortus) project.

## Architecture

This web application is based on React and run as a Docker service.
It communicate via HTTP with the [Hortus API](https://github.com/alexandrelamberty/hortus-api) service.

## Technologies, languages, frameworks

- [Docker](https://www.docker.com/)
- [NPM](https://www.npmjs.com/)
- [Typescript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/en/main)
- [Semantic UI React](https://react.semantic-ui.com/)

## Requirements

- [Docker](https://www.docker.com/)
- [NPM](https://www.npmjs.com/) for development

## Usage

This application is part of a Docker stack. see: [Hortus](https://github.com/alexandrelamberty/hortus) project to run the project.

## Development

To run the application the [Hortus API](https://github.com/alexandrelamberty/hortus-api) service also need to be running in order to retreve the data.

### Run with NPM

If the API service is up and running, create an .env file and fill it accordingly with the API service configuration.

```properties
REACT_APP_API_URL=http://localhost:3333
```

Run the application

```bash
npm run start
```

Go to <http://localhost:3000>

### Test with NPM

> To implement

```bash
npm run tests
```

## Build and run with Docker

Build the image, see: [Dockerfile](./Dockerfile).

To be able to use environment variable in the Docker container an .env file with the desired variable must be present. see. `environment.sh`, `Dockerfile` and `public/index.html`

```bash
docker build . -t alexandrelamberty/hortus-web-app:{tag}
```

Run the image, specify the ports mapping, environment variables file and
network to join.

```bash
docker run -p 3000:3000 --network=hortus_default --env-file .env --name hortus-web-app -d alexandrelamberty/hortus-web-app:{tag}
```

## Push to Docker Hub

> Automated with GitHub Action,
> see: [docker.yml](./.github/workflows/docker.yml)

```bash
docker tag alexandrelamberty/hortus-web:{tag} alexandrelamberty/hortus-web:{tag}
docker push alexandrelamberty/hortus-web:{tag}
```
