FROM node:alpine As development
WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn install
COPY . .
RUN yarn build order

FROM node:alpine as production
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn install --prod
COPY . .
COPY --from=development /usr/src/app/dist ./dist
CMD ["node", "dist/apps/order/main"]