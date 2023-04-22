FROM node:20-alpine 

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm","start"]

# docker build -t docker-reactfrontend .
# docker run -it --rm -d -p 5173:5173 docker-react