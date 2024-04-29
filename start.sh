docker-compose down

# build backend image
docker build -t backend-cadastro-pessoa:latest ./backend

# build frontend image
docker build -t cadastro-pessoas-front-end-spa-app:latest ./cadastro-pessoa

# start environment
docker-compose up --build --force-recreate --remove-orphans
