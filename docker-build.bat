REM Build the Docker image with the specified tag
docker build -t simista/microservice-articles .

REM Log in to Docker Hub
docker login

REM Push the Docker image to Docker Hub
docker push simista/microservice-articles