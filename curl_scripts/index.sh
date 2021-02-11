#!/bin/sh
#curl scripts can be used to test CRUD on the terminal - PA
API="http://localhost:4147"
URL_PATH="/books"

curl "${API}${URL_PATH}" \
  --include \
  --request GET \

echo
