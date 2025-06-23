#!/bin/bash

docker build . -t hub.docker.aut.upt.ro/upt/ccoc-frontend
docker push hub.docker.aut.upt.ro/upt/ccoc-frontend
