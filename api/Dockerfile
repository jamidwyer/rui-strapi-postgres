FROM strapi/base:14

WORKDIR /api
COPY package*.json ./
RUN npm install
COPY favicon.ico .
COPY public/robots.txt public/
COPY src/ src/
COPY config/ config/
EXPOSE 1337

CMD ["npm", "run", "develop"]