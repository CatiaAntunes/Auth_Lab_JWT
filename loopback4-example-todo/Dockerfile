FROM node:18.0.0-alpine3.15
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install -g rimraf
RUN apk add --no-cache bash \
    && wget https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh \
    && chmod +x wait-for-it.sh
COPY . .
CMD ["./wait-for-it.sh", "mysql:3306", "--", "npm", "start"]