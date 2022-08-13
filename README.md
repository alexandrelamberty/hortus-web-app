[![Project Status: WIP – Initial development is in progress, but there has not yet been a stable, usable release suitable for the public.](https://www.repostatus.org/badges/latest/wip.svg)](https://www.repostatus.org/#wip) [![Netlify Status](https://api.netlify.com/api/v1/badges/489b8b79-24fd-496c-b7b6-9b94897a61e6/deploy-status)](https://app.netlify.com/sites/hortus/deploys)

# Hortus Web Client

Gardening planner, monitoring and automation web application. It connect to
[Hortus Server](https://github.com/alexandrelamberty/hortus-server/).

It is part of the [Hortus](https://github.com/alexandrelamberty/hortus) project

## Development Roadmap

- [ ] Architecture
  - [x] React-Router
  - [x] Context
- [ ] UI
  - [ ] User settings
  - [ ] Modals actions and messages
  - [ ] Forms
  - [ ] Data Controlls
    - [ ] Pagination
    - [ ] Actions (Sort, filter, ...)
- [ ] Tests

## Technologies

- [NPM](https://www.npmjs.com/)
- [Docker](https://www.docker.com/)
- [React](https://reactjs.org/)
- [Semantic UI React](https://react.semantic-ui.com/)

## Requirements

- [NPM](https://www.npmjs.com/)

## Installation

Clone the repository

Install NPM dependencies

```bash
npm install
```

## Configuration

This project depends on [Hortus Server](https://github.com/alexandrelamberty/hortus-server/).

You will need to run the server application before runing the web client.

Once your server is configured and running you can create an `.env` file and
fill it accordingly with the settings you choose for the server.

```.env
REACT_APP_NODE_ENV=development | production
REACT_APP_API_URL=http://127.0.0.1:3333
```

## Development

```bash
npm run start
```

## Docker

### Building

```bash
docker build . -f .docker/Dockerfile -t alexandrelamberty/hortus-webapp:latest
```

### Running

```bash
docker run --env-file .env -p 80:80 --network=network alexandrelamberty/hortus-webapp:latest
```

### Docker compose

## Reference

- [React Context](https://wanago.io/2020/09/28/react-context-api-hooks-typescript/)
- [PostCSS 7 compatibility build](https://tailwindcss.com/docs/installation#post-css-7-compatibility-build)
