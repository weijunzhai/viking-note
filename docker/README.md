Docker system prune

build image and tag as name weijunzhai/node
**Docker build -t weijunzhai/node .**

run container and detach
**Docker run -d image**

first port is localhost port, second port is the container port
**Docker run -p 8080:8080 weijunzhai/node**

get into the container with a shell
**Docker run -it weijunzhai/node sh**

get into a running container.
**Docker exec -it constainer-id sh**

**Docker-compose up**

build first and run image.
**Docker-compose up —build**

run containers and detach
**Docker-coponse up -d**

Docker-compose down

Docker-compose ps


Docker compose file:


docker build -f Dockerfile.dev .

Docker run -it -p 3000:3000 CONTAINER_ID

Docker run -it -p 3000:3000 -v /app/node_modules -v$(pwd):/app CONTAINER_ID