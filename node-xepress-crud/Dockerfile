FROM node:18-alpine 

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm","start"]

# docker build -t docker-reactbackend .
# docker run -it --rm -d -p 5000:5000 docker-react