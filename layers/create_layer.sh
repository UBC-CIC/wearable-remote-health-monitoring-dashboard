#!/bin/bash
read curdir <<< $(pwd)
docker build --tag layer:latest .
docker run --rm -v ${curdir}:/dest layer:latest cp layer.zip /dest/layer.zip