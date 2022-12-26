FROM node:16-alpine

ENV NODE_ENV staging


WORKDIR /home/node

COPY package*.json ./
RUN npm install

COPY --chown=node:node . .
RUN npm run build \
    && npm prune --staging

EXPOSE 8080
USER node

CMD ["node", "dist/main.js"]