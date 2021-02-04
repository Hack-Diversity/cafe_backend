#!/bin/sh

API="http://localhost:8080"
URL_PATH="/books"

curl "${API}${URL_PATH}" \
  --include \
  --request GET \

echo
