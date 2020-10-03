FROM node:12
WORKDIR /usr/src/app
COPY package.json ./
RUN install -g typescript
RUN install -g tslint
RUN install
RUN npm install

RUN npm run build
COPY ./dist .
EXPOSE 3030
RUN npm run start