#!/bin/bash

API="http://localhost:8080"
URL_PATH="/books"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "book": {
      "title": "'"${TITLE}"'",
      "author": "'"${AUTHOR}"'",
      "publication_year": "'"${PUBLICATION_YEAR}"'",
      "isbn": "'"${ISBN}"'",
      "publisher": "'"${PUBLISHER}"'",
      "copies": "'"${COPIES}"'",
      "available": "'"${AVAILABLE}"'",
      "rating": "'"${RATING}"'"
    }
  }'

echo
