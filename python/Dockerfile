FROM python:latest

RUN pip install beautifulsoup4 pymongo

WORKDIR /app

RUN pip install --no-cache-dir requests

COPY movie-locations.py .