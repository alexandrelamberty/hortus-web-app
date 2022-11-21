# Hortus Web Application

Gardening planner web application part of the [Hortus](https://github.com/alexandrelamberty/hortus) project.

## Technologies

- [NPM](https://www.npmjs.com/)
- [Docker](https://www.docker.com/)
- [React](https://reactjs.org/)
- [Semantic UI React](https://react.semantic-ui.com/)

## Requirements

- [NPM](https://www.npmjs.com/)
- [Docker](https://www.docker.com/)

## Usage

This application is part of a Docker stack. see:
[Hortus](https://github.com/alexandrelamberty/hortus) project to run the
complete stack.

## Development

To run the application the
[API](https://github.com/alexandrelamberty/hortus-api) also need to be running.

### Run with NPM

If the api service is up and running, create an .env file and fill it
accordingly with the service configuration.

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