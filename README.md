# rui-strapi-postgres

Work in progress. Runs react-web-ui (work in progress -- not recommended!), Strapi, and Postgres in Docker.

## Requirements

Docker

## Setup

To get a React frontend with some components, clone this repo and its submodule to yourapp-app:

```bash
git clone --recurse-submodules -j8 git@github.com:jamidwyer/rui-strapi-postgres.git yourapp-app
cd yourapp-app
```

To bring your own frontend:

```bash
git clone git@github.com:jamidwyer/rui-strapi-postgres.git yourapp-app
cd yourapp-app
```

Then build or clone your frontend into /frontend.

Rename .env.example to .env and change values as needed.

## Run

`docker-compose up --build`

You can manage your api at http://localhost:1337/admin and see the frontend at http://<some IP address>:3000/

## Content management and API

### Add content types and API endpoints

`npm run strapi generate`

Choose content-type.

Add the values for the content-type you'd like.

Say yes to adding to a new API.

Your new content type will be in /src/api/<singular_name>. You could commit this to a git repo if you or others might use it later.

You can use some of my [saved content types](https://github.com/jamidwyer/strapi-content-types) if they're relevant to your project.

To update your local api Docker image, run:

`docker build -t api .`
