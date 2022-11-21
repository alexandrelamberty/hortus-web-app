# Hortus Web Application

Gardening planner web application part of the [Hortus](https://github.com/alexandrelamberty/hortus) project.

## Architecture

This web application run as a Docker service and use HTTP to communicate with the [Hortus API](https://github.com/alexandrelamberty/hortus-api) service.

## Technologies, languages, frameworks...

- [Docker](https://www.docker.com/)
- [NPM](https://www.npmjs.com/)
- [Typescript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [Semantic UI React](https://react.semantic-ui.com/)

## Requirements

- [Docker](https://www.docker.com/)
- [NPM](https://www.npmjs.com/) for development

## Usage

This application is part of a Docker stack. see:
[Hortus](https://github.com/alexandrelamberty/hortus) project to run the
complete stack.

## Development

To run the application the
[Hortus API](https://github.com/alexandrelamberty/hortus-api) service also need to be running
in order to retreve the data.

### Run with NPM

If the API service is up and running, create an .env file and fill it
accordingly with the API service configuration.

```properties
REACT_APP_ENV=dev
REACT_APP_API_URL=http://localhost:3333
```

Run the application 

```bash
npm run start
```

Go to [http://localhost:3000]

### Test with NPM

> To implement

## Build and run with Docker

Build the image, see: [Dockerfile](./Dockerfile).

```bash
docker build . -t alexandrelamberty/hortus-web-app:{tag}
```

Run the image, specify the ports mapping, environment variables file and
network to join.

```bash
docker run -p 3000:3000 --network=hortus_default --env-file .env --name hortus-web-app -d alexandrelamberty/hortus-web-app:latest
```

## Push to Docker Hub

> Automated with GitHub Action, see: [docker.yml](./.github/workflows/docker.yml)

```bash
docker tag alexandrelamberty/hortus-web:{tag} alexandrelamberty/hortus-web:{tag}
docker push alexandrelamberty/hortus-web:{tag}
```