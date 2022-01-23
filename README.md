# rui-strapi-postgres

Set up to run react-web-ui (work in progress -- not recommended!), Strapi, and Postgres in Docker.

## Requirements

Docker

## Setup

Clone this repo to yourapp-app:

```bash
git clone https://github.com/jamidwyer/rui-strapi-postgres.git yourapp-app
cd yourapp-app
```

## Run

`docker-compose up --build`

You can manage your api at http://localhost:1337/admin and see the frontend at http://0.0.0.0:3000/

## Content management and API

### Add content types and API endpoints

`npm run strapi generate`

Choose content-type.

Add the values for the content-type you'd like.

Say yes to adding to a new API.

Your new content type will be in /src/api/<singular_name>. You could commit this to a git repo if you or others might use it later.