#!/bin/bash
#curl script can be used to test CRUD in the terminal -PA
API="http://localhost:4147"
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
