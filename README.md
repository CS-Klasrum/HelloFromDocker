# Basic Docker Demo

## What is Docker?
According to [Docker's website](https://docker.com), A container is a standard unit of software that packages up code and all its dependencies so the application runs quickly and reliably from one computing environment to another. A Docker container image is a lightweight, standalone, executable package of software that includes everything needed to run an application: code, runtime, system tools, system libraries and settings.


## Dependencies
- [Docker](https://docs.docker.com/desktop/)
- [WSL2 (For Windows only)](https://docs.microsoft.com/en-us/windows/wsl/install)


## Post Install Todo
- [Add your user name to docker group (For Linux Subsystems or Linux installations)](https://docs.docker.com/engine/install/linux-postinstall/)


## Getting started

### Build the image

```sh
docker build -t hello_from_docker_1 .
```

### Run a container from an image
```sh
docker run -p 3000:3000 --name docker_app_1 hello_from_docker_1
```

### Open your browser and visit
```sh
http://localhost:3000
```

## Learn Docker
- https://docker-curriculum.com/