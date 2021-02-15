FROM node:15.5.1

LABEL version="1.0"
LABEL description="This is the base docker image for the Loan Calculator backend API."
LABEL maintainer = ["iandrabedin@gmail.com"]

RUN mkdir -p /app/server
WORKDIR /app/server

COPY package.json /app/server
COPY package-lock.json /app/server

RUN npm install

COPY . /app/server

ENV PORT=8000

EXPOSE 8000

CMD ["npm", "start"]