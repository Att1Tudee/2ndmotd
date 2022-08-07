# Stage1: UI Build
FROM node:16.14.2 AS client-build
WORKDIR /usr/src
COPY client/ ./client/
RUN cd client && npm install && npm run build

# Stage2: API Build
FROM node:16.14.2 AS server-build
WORKDIR /usr/src
COPY server/ ./server/
RUN cd server && npm install && ENVIRONMENT=production npm run build
RUN ls

# Stage3: Packagign the app
FROM node:16.14.2
WORKDIR /root/
COPY --from=server-build /usr/src/client/build ./client/build
COPY --from=client-build /usr/src/server/dist .
RUN ls

EXPOSE 80

CMD ["node", "api.bundle.js"]