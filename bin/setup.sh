#!/bin/bash

# Check if .env.local file already exists
if [ -f .env.local ]; then
  echo ".env.example file does not exist. Aborting."
  exit 1
fi

# Check if .env.local.example file exists
if [ ! -f .env.local.example ]; then
  echo ".env.example file does not exist. Aborting."
  exit 1
fi

# Copy .env.local.example to .env.local
cp .env.local.example .env.local

# Read the values of the variables from command-line arguments
for arg in "$@"; do
  if [[ "$arg" != *"="* ]]; then
    echo "Invalid argument: $arg. Arguments must be in the format KEY=VALUE. Aborting."
    exit 1
  fi

  key=$(echo "$arg" | cut -d'=' -f1)
  value=$(echo "$arg" | cut -d'=' -f2)

  # Sanitize inputs
  if [[ "$key" != *[![:alnum:]_]* ]]; then
    sed -e "s/^${key}=.*/${key}=${value}/" .env.local > temp && mv temp .env.local
  else
    echo "Invalid key: $key. Keys must contain only letters, numbers, and underscores. Aborting."
    exit 1
  fi
done

# install node_modules and run dev
echo Installing dependencies
yarn
yarn dev
