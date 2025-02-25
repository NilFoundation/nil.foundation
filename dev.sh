#!/bin/bash

# install deps if not exists

if [ ! -d admin/node_modules ]; then
  pushd admin && pnpm install && popd
fi

if [ ! -d site/node_modules ]; then
  pushd site && pnpm install && popd
fi

# check env
if [ ! -f admin/.env ]; then
  cp admin/.env.example admin/.env
fi


# default token
pnpm run default_user --prefix admin


# start strapi
pushd admin && pnpm run develop &
echo $! > strapi.pid
popd
echo "run strapi on http://localhost:1337"

# save pid of strapi



# wait for strapi to start curl it to check
echo "wait for strapi to start"
while true; do
  sleep 1
  echo "try curl"
  curl http://localhost:1337/admin
  if [ $? -eq 0 ]; then
    break
  fi
done

# create token for admin
# check exists .api_token
if [ ! -f admin/.api_token ]; then
  echo "create token for admin"
  cd admin
  token=$(./create_token.sh admin@nil.foundation XYgiXDOcg4Lfpv6g)
  if [ $? -eq 0 ]; then
    echo $token > .api_token
    else
        echo "error creating token"
        exit 1
  fi
  cd ..
fi
token=$(cat admin/.api_token)

echo Token: $token


# start site
# check exists .env
if [ ! -f site/.env ]; then
  echo "create .env for site"
  echo "STRAPI_API_URL=http://127.0.0.1:1337/api" >> site/.env
  echo "STRAPI_URL=http://127.0.0.1:1337" >> site/.env
  # add token 
  echo "STRAPI_API_KEY=$token" >> site/.env
  echo "NEXT_PUBLIC_BASE_URL=http://localhost:3000" >> site/.env
  echo "FRESHTEAM_API_URL=http://nil.freshteam.com" >> site/.env
fi
pushd site
pnpm run build

# run in another thread

pnpm run dev &
echo $! > ../site.pid
popd
echo "run site on http://localhost:3000"
# save pid of site



# wait till ctrl+c is pressed

( trap "kill $(cat strapi.pid) $(cat site.pid); exit" SIGINT ; read -r -d '' _ </dev/tty ) ## wait for Ctrl-C

echo "Press Ctrl+C to stop"
